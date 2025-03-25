/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/diabetes-blog', 
  images: { unoptimized: true }

};

export default nextConfig;


