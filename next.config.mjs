/** @type {import('next').NextConfig} */
const key = process.env.NEXT_PUBLIC_API_URL;
const protocol = "http";
const hostname = "localhost";

if (key != null) {
  const splitData = key.split(":");
  protocol = splitData[0];
  hostname = splitData[1].slice(2);
}

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
