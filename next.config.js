/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["s.gravatar.com"],
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: "https://nuxtjs-test-nine-iota.vercel.app/:path*",
          // destination: "http://192.168.1.42:3000/:path*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
