"use client";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNavbar } from "../components/usedNav";
import { OverviewPage } from "../customcompeonet/Overview";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import "./globals.css";

export default function RootLayout({
  children,
  showNavbar = false, // Default to true if not provided
}) {
  const [sessionData, setSessionData] = useState(null);

  useEffect(() => {
    const fetchSessionData = async (userId) => {
      try {
        const response = await fetch(
          `http://localhost:8000/sessiondata/${userId}`,
          {
            headers: { "X-Request-Name": "SessionData" }, // Set custom header
          }
        );
        if (response.ok) {
          const data = await response.json();
          setSessionData(data);
        } else {
          console.error("Failed to fetch session data");
        }
      } catch (error) {
        console.error("Error fetching session data:", error);
      }
    };

    // Fetch user ID from JWT token stored in local storage
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;
        fetchSessionData(userId);
      } catch (error) {
        console.error("Error decoding JWT token:", error);
      }
    }
  }, []);

  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Pass sessionData to children components */}
          <MainNavbar showNavbar={showNavbar} sessionData={sessionData} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
