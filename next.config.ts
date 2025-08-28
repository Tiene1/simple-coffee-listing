import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'csyxkpbavpcrhwqhcpyy.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/assets/coffee-challenge/**',
      },
    ],
  },
};

export default nextConfig;
