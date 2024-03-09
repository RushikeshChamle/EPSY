import React from "react";
import { MainNavbar } from "@/components/usedNav";

import { OverviewPage } from "@/customcompeonet/Overview";

import RootLayout from "../layout";

export default function page() {
  return (
    <main>
      <RootLayout showNavbar={true}>this is dashbord</RootLayout>
      <OverviewPage />
    </main>
  );
}
