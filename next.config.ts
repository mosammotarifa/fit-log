import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // img.magnific.com
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
        port: '',
        pathname: '**',
       
      },
    ],
  },
};

export default nextConfig;
