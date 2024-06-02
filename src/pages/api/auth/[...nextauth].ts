import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      // GitHub Client ID and Secret from environment variables
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      // GitHub Client ID and Secret from environment variables
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGEL_CLIENT_SECRET!,
    }),
  ],
  // Optional: Additional NextAuth configuration can go here
});

