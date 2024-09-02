/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    basePath: "/",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
}; 

module.exports = nextConfig;
