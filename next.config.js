/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "rqcoa3ubmzn9qpsj.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
