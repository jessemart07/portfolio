/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_NOINDEX:
      process.env.NEXT_PUBLIC_NOINDEX ||
      (process.env.VERCEL_ENV === "preview" ? "true" : "false"),
  },
};
module.exports = nextConfig;
