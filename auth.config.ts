import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"


export const authConfig: NextAuthConfig = {
  providers: [
    Google({
          }),
    Credentials({
        
    })
]} satisfies NextAuthConfig
