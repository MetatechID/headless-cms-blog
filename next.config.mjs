/** @type {import('next').NextConfig} */
const key = process.env.NEXT_PUBLIC_API_URL;
let protocol = "http";
let hostname = "localhost";

if (key != null) {
  let splitData = key.split(":");
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
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
