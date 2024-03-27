"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const menuItems = [
  { label: "Overview", href: "/overview", icon: HomeOutlinedIcon },
  { label: "Dashboard", href: "/dashboard", icon: DashboardOutlinedIcon },
  { label: "Charts", href: "/charts", icon: InsertChartOutlinedRoundedIcon },
  { label: "Analyse", href: "/analyse", icon: ShowChartRoundedIcon },
  { label: "Heatmap", href: "/heatmap", icon: WhatshotIcon },
  { label: "Data", href: "/data", icon: AutoAwesomeRoundedIcon },
  { label: "Users", href: "/users", icon: PeopleAltOutlinedIcon },
  { label: "Session", href: "/session", icon: SlowMotionVideoOutlinedIcon },
  { label: "Account", href: "/account", icon: SettingsSuggestOutlinedIcon },
  { label: "Logout", href: "/login", icon: LogoutOutlinedIcon },
];

export function MainNavbar({ showNavbar }: { showNavbar: boolean }) {
  console.log("showNavbar:", showNavbar); // Add console log for debugging

  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  useEffect(() => {
    const savedIndex = localStorage.getItem("clickedMenuItemIndex");
    if (savedIndex !== null) {
      setClickedIndex(parseInt(savedIndex));
    }
  }, []);

  const handleClick = (index: number) => {
    localStorage.setItem("clickedMenuItemIndex", index.toString());
    setClickedIndex(index);
  };

  if (!showNavbar) {
    return null; // Don't render the navbar if showNavbar is false
  }

  return (
    <div
      id="mainNavbarContainer"
      className=""
      style={{
        position: "sticky",
        left: "0rem",
        top: "0px",
        marginTop: "1px",
      }}
    >
      <DropdownMenu modal={false} open={true}>
        <DropdownMenuTrigger />
        <DropdownMenuContent
          style={{
            marginTop: "-25px",
            background: "rgb(252 250 255)",
            // background: "#030712",

            borderColor: "transparent",
            left: "-2px",
            borderRadius: "1px",
            borderLeftColor: "transparent",
            borderWidth: "2px",
            height: "60rem",
            // color: "white",
          }}
        >
          <DropdownMenuLabel>Epsy</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <DropdownMenuItem
                className="menu-item"
                onClick={() => handleClick(index)}
                style={{
                  backgroundColor: clickedIndex === index ? "#d6c5f8" : "",

                  cursor: "pointer",
                }}
              >
                <item.icon style={{ marginRight: "6px" }} />
                {item.label}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
