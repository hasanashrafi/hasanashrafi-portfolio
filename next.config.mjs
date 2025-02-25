/** @type {import('next').NextConfig} */
const nextConfig = {
   target: 'serverless',
    experimental: {
    fontLoaders: false,
    externalDir: true,
  },
};

export default nextConfig;
