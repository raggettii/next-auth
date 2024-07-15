/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GITHUB_APP_CLIENT_ID: process.env.GITHUB_APP_CLIENT_ID,
    GIT_APP_CLIENT_SECRET: process.env.GIT_APP_CLIENT_SECRET,
    NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET,
  },
};

export default nextConfig;
