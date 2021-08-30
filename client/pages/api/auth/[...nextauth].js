import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Env from "../../../utils/env";
import client from "../../../services/graphQL/client";
import { AUTH_DISCORD_LOGIN } from "../../../services/graphQL/queries/auth";

const callbacks = {
  jwt: async (token, user, account, profile, isNewUser) => {
    //  "user" parameter is the object received from "authorize"
    //  "token" is being send below to "session" callback...
    //  ...so we set "user" param of "token" to object from "authorize"...
    //  ...and return it...
    user && (token.user = user);
    return Promise.resolve(token); // ...here
  },
  session: async (session, user, sessionToken) => {
    //  "session" is current session object
    //  below we set "user" param of "session" to value received from "jwt" callback
    session.user = user.user;
    return Promise.resolve(session);
  },
  async signIn(user) {
    try {
      const userData = await client.query({
        query: AUTH_DISCORD_LOGIN,
        variables: {
          name: user.name,
          identity: user.email,
          discordId: user.id,
        },
      });
      user.token = userData.data.userDiscordMutation.token
      return Promise.resolve(user);
    } catch (error) {
      return Promise.resolve({});
    }
  },
  redirect: async (url, _) => {
    return Promise.resolve("/profile");
  },
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
