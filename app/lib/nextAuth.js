// import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    GithubProvider({
      clientSecret: process.env.NEXT_AUTH_SECRET,
      clientId: process.env.GITHUB_APP_CLIENT_ID,
    }),
  ],
};
