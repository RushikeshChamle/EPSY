// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
// import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
// import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
// import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
// import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";
// import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
// import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export function MainNavbar({ showNavbar }: { showNavbar: boolean }) {
//   const [clickedItem, setClickedItem] = useState(0); // Initialize with index of Overview item

//   useEffect(() => {
//     // Retrieve clicked item index from localStorage on component mount
//     const storedIndex = localStorage.getItem("clickedItem");
//     if (storedIndex !== null) {
//       setClickedItem(parseInt(storedIndex));
//     }
//   }, []); // Run only once on component mount

//   const handleItemClick = (index) => {
//     setClickedItem(index);
//     // Store clicked item index in localStorage
//     localStorage.setItem("clickedItem", index);
//   };

//   const handleMenuClose = () => {
//     setClickedItem(null);
//   };

//   if (!showNavbar) {
//     return null;
//   }

//   return (
//     <div
//       id="mainNavbarContainer"
//       style={{
//         position: "sticky",
//         left: "0rem",
//         top: "0px",
//         marginTop: "1px",
//       }}
//     >
//       <style>
//         {`
//           .dropdown-menu-item:hover,
//           .dropdown-menu-item.clicked {
//             background-color: #d6c5f8;
//           }
//         `}
//       </style>
//       <DropdownMenu modal={false} open={true} onOpenChange={handleMenuClose}>
//         <DropdownMenuTrigger />
//         <DropdownMenuContent
//           style={{
//             marginTop: "-23px",
//             background: "rgb(252 250 255)",
//             borderColor: "Grey",
//             borderLeftColor: "transparent",
//             borderWidth: "2px",
//           }}
//         >
//           <DropdownMenuLabel>Epsy</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           {menuItems.map((menuItem, index) => (
//             <Link href={menuItem.link} key={index}>
//               <DropdownMenuItem
//                 className={`dropdown-menu-item ${
//                   clickedItem === index ? "clicked" : ""
//                 }`}
//                 onClick={() => handleItemClick(index)}
//               >
//                 {menuItem.icon}
//                 {menuItem.label}
//               </DropdownMenuItem>
//             </Link>
//           ))}
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// }

// // Define your menu items here
// const menuItems = [
//   { label: "Overview", icon: <HomeOutlinedIcon />, link: "/overview" },
//   { label: "Dashboard", icon: <DashboardOutlinedIcon />, link: "/dashboard" },
//   {
//     label: "Charts",
//     icon: <InsertChartOutlinedRoundedIcon />,
//     link: "/charts",
//   },
//   { label: "Analyse", icon: <ShowChartRoundedIcon />, link: "/analyse" },
//   { label: "Heatmap", icon: <WhatshotIcon />, link: "/heatmap" },
//   { label: "Data", icon: <AutoAwesomeRoundedIcon />, link: "/data" },
//   { label: "Users", icon: <PeopleAltOutlinedIcon />, link: "/users" },
//   { label: "Session", icon: <SlowMotionVideoOutlinedIcon />, link: "/session" },
//   { label: "Account", icon: <SettingsSuggestOutlinedIcon />, link: "/account" },
//   { label: "Logout", icon: <LogoutOutlinedIcon />, link: "/login" },
// ];
