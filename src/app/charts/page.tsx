"use client";

import React from "react";
import Link from "next/link";
import RootLayout from "../layout";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "/Users/rushikesh/Documents/EPSY/src/components/UI/dropdown-menu_setting.tsx";

export default function Charts() {
  return (
    <RootLayout showNavbar={true}>
      <div className="detailsnav">
        <div>
          <DropdownMenu
            id="setting2"
            modal={false}
            open={true}
            style={{
              position: "relative",
              top: "-36 px",
            }}
          >
            <DropdownMenuTrigger />

            <DropdownMenuContent
              style={{
                position: "relative",
                top: "-23px",
                left: "7rem",
                borderColor: "Transparent",
              }}
            >
              <ScrollArea id="scrollbar3" scrollHideDelay={0}>
                <Link href="/charts/all">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    All
                  </DropdownMenuItem>
                </Link>

                <Link href="/charts/templates">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Templates
                  </DropdownMenuItem>
                </Link>

                <DropdownMenuSeparator />

                <Link href="/data/visuallabelling">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Unused
                  </DropdownMenuItem>
                </Link>

                <Link href="/data/visuallabelling">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Archived
                  </DropdownMenuItem>
                </Link>
              </ScrollArea>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </RootLayout>
  );
}
