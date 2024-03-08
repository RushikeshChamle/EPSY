import { Metadata } from "next";
import Link from "next/link";
import RootLayout from "/Users/rushikesh/Documents/EPSY/src/app/layout.tsx";
import registerImage from "/Users/rushikesh/Documents/EPSY/src/components/UI/register.jpg";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { Icons } from "@/components/ui/icons";
import { UserAuthForm } from "@/components/UI/user-auth-form-login";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
  return (
    <div>
      <div
        className="container flex h-screen w-screen flex-col items-center justify-center"
        // style={{
        //   backgroundImage: `url('/Users/rushikesh/Documents/EPSY/src/components/UI/register.jpg')`,

        //   // Adjust the path as needed
        // }}
      >
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className="mx-auto h-10 w-10" />

            <h1 className="text-2xl font-semibold tracking-tight">
              Sign in to your account
            </h1>
          </div>

          <br />
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link
              href="/register"
              className="hover:text-brand underline underline-offset-4"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
