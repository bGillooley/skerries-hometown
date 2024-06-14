import type { NextAuthConfig } from "next-auth";
import google from "next-auth/providers/google";

export const authConfig = {
  providers: [google], // Add providers with an empty array for now
} satisfies NextAuthConfig;
