pipeline {
    agent {
        docker {
            image 'docker:20.10.7-dind'  // Docker image with Docker-in-Docker support
            args '--privileged'  // Grant the container the necessary privileges to run Docker-in-Docker
        }
    }

    environment {
        KUBECONFIG = "/var/lib/jenkins/.kube/config"  // Path to your kubeconfig file on Jenkins server
        NAMESPACE = "halfskirmish"                     // Namespace where the deployment will occur
        IMAGE_NAME = "192.168.1.2:32000/halfskirmish-fes"  // Updated image name
        MANIFESTS_PATH = "manifests"                   // Path to the manifests folder (no subfolders)
    }

    stages {
        stage('Build and Push Docker Image') {
            steps {
                script {
                    // Define variables
                    def dockerfile = 'Dockerfile'  // Dockerfile for building the image
                    def imageTag = 'latest'        // Always push with 'latest' tag

                    // Build and push Docker image to the registry
                    withEnv(["HOME=/tmp"]) {  // Force HOME to /tmp to avoid Snap issue
                        // Build Docker image in the DinD container
                        sh """
                            docker build -t ${IMAGE_NAME}:${imageTag} -f ${dockerfile} .
                            docker push ${IMAGE_NAME}:${imageTag}  // Push the image to the registry
                        """
                    }

                    // Save imageTag for later use in the pipeline
                    env.IMAGE_TAG = imageTag
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    def imageTag = env.IMAGE_TAG  // Use 'latest' tag for deployment

                    // Update the deployment manifest with the correct image and tag
                    sh """
                    set -e  // Fail immediately if any command fails
                    sed -i 's|image:.*|image: ${IMAGE_NAME}:${imageTag}|' ${MANIFESTS_PATH}/deployment.yaml
                    """

                    // Apply the updated Kubernetes manifests
                    sh """
                    kubectl --kubeconfig=${KUBECONFIG} apply -f ${MANIFESTS_PATH}/ -n ${NAMESPACE}
                    """
                }
            }
        }

        stage('Force Rolling Restart') {
            steps {
                script {
                    // Restart the deployment to apply the new image
                    sh """
                    kubectl --kubeconfig=${KUBECONFIG} rollout restart deployment/halfskirmish-fes -n ${NAMESPACE}
                    """
                }
            }
        }
    }
}
