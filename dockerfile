# Use the official Node.js image as a base image
# Use the official Node.js image with a specific version
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache for dependencies
COPY package*.json ./

# Install dependencies (will be cached if package.json hasn't changed)
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app will run on (default for Next.js)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
