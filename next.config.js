/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['paolominopoli.altervista.org','paolominopoli.vercel.app']
  },
  i18n: {
    locales: ["it"],
    defaultLocale: "it",
  },
}

module.exports = nextConfig
