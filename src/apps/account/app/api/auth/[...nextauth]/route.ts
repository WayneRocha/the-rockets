import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { get_env } from "../../../../../../webvitals/env_middleware";

const prisma = new PrismaClient();
const config: AuthOptions = {
    //@ts-ignore
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: get_env("GOOGLE_CLIENT_ID"),
            clientSecret: get_env("GOOGLE_CLIENT_SECRET"),
        }),
    ],
    session: {
        strategy: "database",
    },
}

const handler = NextAuth(config);

export { handler as GET, handler as POST };
