/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/**",  // Use '**' to allow all paths under this hostname
      },
      {
        protocol: "https",
        hostname: "icons8.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
