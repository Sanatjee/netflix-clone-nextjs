/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/emfpexdmyc/netflix-clone/**",
      },
    ],
  },
};

module.exports = nextConfig;
