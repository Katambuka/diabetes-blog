/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  trailingSlash: true,
  basePath: '/diabetes-blog', 
  images: { unoptimized: true } 
};

export default nextConfig;