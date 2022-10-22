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
        },
      ],
    };
  },
};

module.exports = nextConfig;
