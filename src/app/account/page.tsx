"use client";

import React from "react";
import Link from "next/link";

import { ScrollArea } from "@/components/ui/scroll-area";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "/Users/rushikeshchamle/Documents/EPSY/src/components/UI/dropdown-menu_setting.tsx";

import "./style.css";
import RootLayout from "/Users/rushikeshchamle/Documents/EPSY/src/app/layout.tsx";

const SettingOption = React.memo(() => {
  return (
    <RootLayout showNavbar={true}>
      <div id="detailsaccount" className="allpagewidth">
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
                <DropdownMenuLabel>Setting</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <Link href="/account/general">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    General
                  </DropdownMenuItem>
                </Link>

                <Link href="/account/accountsetting">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Account Setting
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />

                <DropdownMenuLabel>Plan</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <Link href="/account/planusage">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Plan Usage
                  </DropdownMenuItem>
                </Link>

                <Link href="/account/plandetails">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Plan Details
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />

                <DropdownMenuLabel>Project & Team</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <Link href="/account/project">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Project
                  </DropdownMenuItem>
                </Link>

                <Link href="/account/team">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Team
                  </DropdownMenuItem>
                </Link>

                <Link href="/account/users">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Users
                  </DropdownMenuItem>
                </Link>

                <Link href="/account/role">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Role
                  </DropdownMenuItem>
                </Link>

                <DropdownMenuSeparator />

                <DropdownMenuLabel
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Privacy & Security
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <Link href="/account/privacy">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Privacy & Security
                  </DropdownMenuItem>
                </Link>

                <Link href="/account/excluded">
                  <DropdownMenuItem
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Excluded IP{" "}
                  </DropdownMenuItem>
                </Link>
              </ScrollArea>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </RootLayout>
  );
});
export default SettingOption;
