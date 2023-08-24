/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgur.com",
        port: "",
        pathname: "/kbGs6zH.png",
      },
      {
        protocol: "https",
        hostname: "www.pexels.com",
        port: "",
        pathname: "/es-es/foto/paisaje-agua-bosque-corriente-12258042/",
      },
    ],
  },
};

module.exports = nextConfig;
