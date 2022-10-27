/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["s.gravatar.com"],
  },
  experimental: { appDir: true },
  rewrites: async () => {
    return {
      fallback: [
        // {
        //   source: "/:path*",
        //   destination: `${process.env.NUXT_URL}/:path*`,
        // },
        {
          source: "/settings",
          destination: `/settings`,
        },
        {
          source: "/login",
          destination: `/login`,
        },
        {
          source: "/",
          destination: `${process.env.NUXT_URL}/`,
        },
        {
          source: "/profile",
          destination: `${process.env.NUXT_URL}/profile`,
        },
        {
          source: "/tickets/:path*",
          destination: `${process.env.NUXT_URL}/tickets/:path*`,
        },
        {
          source: "/options/:path*",
          destination: `${process.env.NUXT_URL}/options/:path*`,
        },
        {
          source: "/companies/:path*",
          destination: `${process.env.NUXT_URL}/companies/:path*`,
        },
        {
          source: "/customers/:path*",
          destination: `${process.env.NUXT_URL}/customers/:path*`,
        },
        {
          source: "/settings/:path",
          destination: `${process.env.NUXT_URL}/settings/:path`,
        },
        {
          source: "/_nuxt/:path*",
          destination: `${process.env.NUXT_URL}/_nuxt/:path*`,
        },
        {
          source: "/__webpack_hmr/:path*",
          destination: `${process.env.NUXT_URL}/__webpack_hmr/:path*`,
        },
        {
          source: "/_loading/:path*",
          destination: `${process.env.NUXT_URL}/_loading/:path*`,
        },
      ],
    };
  },
  // rewrites: async () => {
  //   return [
  //     {
  //       source: "/settings",
  //       destination: `/settings`,
  //     },
  //     {
  //       source: "/login",
  //       destination: `/login`,
  //     },
  //     {
  //       source: "/api/:path*",
  //       destination: `/api/:path*`,
  //     },
  //     {
  //       source: "/",
  //       destination: `${process.env.NUXT_URL}/`,
  //     },
  //     {
  //       source: "/_nuxt/:path*",
  //       destination: `${process.env.NUXT_URL}/_nuxt/:path*`,
  //     },
  //     {
  //       source: "/__webpack_hmr/:path*",
  //       destination: `${process.env.NUXT_URL}/__webpack_hmr/:path*`,
  //     },
  //     {
  //       source: "/_loading/:path*",
  //       destination: `${process.env.NUXT_URL}/_loading/:path*`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
