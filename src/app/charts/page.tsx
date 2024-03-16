import React from "react";

import { Button } from "@/components/ui/button";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import "/Users/rushikesh/Documents/EPSY/src/app/globals.css";

import RootLayout from "../layout";

export default function page() {
  return (
    <RootLayout showNavbar={true}>
      <div className="detailsnav">
        <div>
          <Button className={cn(buttonVariants({ variant: "secondary" }))}>
            Secondary
          </Button>

          <Button variant="secondary">Secondary</Button>
        </div>
      </div>
    </RootLayout>
  );
}
