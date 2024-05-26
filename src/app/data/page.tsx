"use client";

import { Payment, columns } from "./column";
import { DataTable } from "./data-table";
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
} from "/Users/rushikeshchamle/Documents/EPSY/src/components/UI/dropdown-menu_setting.tsx";

export default function DemoPage() {
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
                <Link href="/data/rawevents">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Raw Events
                  </DropdownMenuItem>
                </Link>

                <Link href="/data/labelledevents">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Labelled Events
                  </DropdownMenuItem>
                </Link>

                <DropdownMenuSeparator />

                <Link href="/data/visuallabelling">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Visual Labelling
                  </DropdownMenuItem>
                </Link>

                <Link href="/data/livedata">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Live Data feed
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />

                <Link href="/data/pageview">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Pageview Suggestion
                  </DropdownMenuItem>
                </Link>

                <Link href="/data/properties">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Properties
                  </DropdownMenuItem>
                </Link>

                <Link href="/data/segments">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Segments
                  </DropdownMenuItem>
                </Link>

                <DropdownMenuSeparator />

                <Link href="/data/archived">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Archived
                  </DropdownMenuItem>
                </Link>

                <Link href="/data/warehouse">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Warehouse Connect
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
