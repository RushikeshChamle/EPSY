"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

import * as z from "zod";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios"; // Import axios for making HTTP requests
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { userAuthSchema } from "@/lib/validations/auth";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Icons } from "@/components/ui/icons";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email.toLowerCase(),
          password: data.password,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        // Assuming the API response includes a token
        const token = responseData.token;
        // You can handle storing the token and redirecting the user as needed
        toast({
          title: "Login successful",
          description: "You have successfully logged in.",
        });

        // Fetch session details after successful login
        const sessionResponse = await fetch("http://localhost:3000/session", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const sessionData = await sessionResponse.json();
        // You can handle the session data here, for example, storing it in state or context

        // Redirect to dashboard
        window.location.href = "/dashboard"; // Using window.location.href for redirect
      } else {
        toast({
          title: "Login failed",
          description:
            responseData.message || "An error occurred while logging in.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast({
        title: "Login failed",
        description: "An error occurred while logging in.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-10">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register("email")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}

            <Label htmlFor="password">Password *</Label>

            <div className="relative">
              <Input
                id="password"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
                {...register("password")}
              />
              <button
                type="button"
                className="absolute inset-y-5 right-0 flex items-center px-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <VisibilityOffIcon className="h-4 w-4" />
                ) : (
                  <VisibilityIcon className="h-4 w-4" />
                )}
              </button>
            </div>

            <div style={{ position: "relative", left: "129px", top: "-11px" }}>
              <p className="px-8 text-center text-sm text-muted-foreground">
                <Link
                  href="/register"
                  className="hover:text-brand underline underline-offset-4"
                  style={{ fontSize: "10px" }}
                >
                  Forgot Password
                </Link>
              </p>
            </div>
          </div>

          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={() => {
          setIsGitHubLoading(true);
          signIn("Google");
        }}
        disabled={isLoading || isGitHubLoading}
      >
        {isGitHubLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <GoogleIcon className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </button>
    </div>
  );
}
