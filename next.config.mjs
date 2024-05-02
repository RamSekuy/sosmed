/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {hostname:"th.bing.com"},
        ],
      },
};

export default nextConfig;
