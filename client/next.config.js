/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.watchOptions = {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000,
    };
    return config;
  },
};

module.exports = nextConfig;
