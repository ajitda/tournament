import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Env from "../../../utils/env";

const callbacks = {
  session: async (session, user) => ({
    ...session,
    user: {
      id: user._id,
      permissions: user.permissions,
      banned: user.banned,
      ...session.user,
    },
  }),
  async signIn(user) {
    console.log({user})

    return `/`;
    // return true;
  },
  // redirect: async (url, _) => {
  //   if (url === '/api/auth/signin') {
  //     return Promise.resolve('/profile')
  //   }
  //   return Promise.resolve('/api/auth/signin')
  // },
};

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Discord({
      clientId: Env.DISCORD_CLIENT_ID,
      clientSecret: Env.DISCORD_CLIENT_SECRET,
    }),
  ],
  callbacks,

  // A database is optional, but required to persist accounts in a database
  //   database: process.env.DATABASE_URL,
});
