/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  pageExtensions: ['mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
  },
};

// eslint-disable-next-line
module.exports = nextConfig;
