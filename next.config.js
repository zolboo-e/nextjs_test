/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["s.gravatar.com", "lh3.googleusercontent.com"],
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `${process.env.NUXT_URL}/:path*`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
