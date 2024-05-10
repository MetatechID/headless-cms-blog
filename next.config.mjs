/** @type {import('next').NextConfig} */
const key = process.env.NEXT_PUBLIC_API_URL;

const splitData = key.split(":");
const protocol = splitData[0];
const hostname = splitData[1].slice(2);

const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: protocol,
        hostname: hostname,
      },
    ],
  },
};

export default nextConfig;
