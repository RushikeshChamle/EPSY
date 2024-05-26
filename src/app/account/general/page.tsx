"use client";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import "../style.css";
import { Input } from "@/components/ui/input";

import SettingOption from "../page";

const general_Details = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Fetch user details using stored JWT token
    const token = localStorage.getItem("token");
    if (token) {
      // Type assertion to inform TypeScript about the shape of the decoded token
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      fetchUserDetails(userId);

      console.log("Decoded22 token: ", userId);
      console.log("UserId: ", token);
    }
  }, []);

  const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(`http://localhost:9000/users/${userId}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      if (response.ok) {
        const userData = await response.json();
        setUserDetails(userData);

        console.log("This User details", userData);
      } else {
        // Handle error
        console.error("Failed to fetch user details");
      }
    } catch (error) {
      // Handle error
      console.error("Error fetching user details:", error);
    }

    console.log("Fetched Data: ", fetchUserDetails);
  };

  return (
    <div>
      <SettingOption />

      <div id="this" className="settingsidepage">
        <h1>User Details</h1>

        <br />
        <br />
        {userDetails && (
          <Table
            id="t1details"
            style={{
              position: "relative",
              width: "56rem",
            }}
          >
            <TableHeader>
              <TableRow></TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell id="AppId" className="font-medium">
                  User Name
                </TableCell>
                <TableCell>{userDetails.name}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell id="project_Name" className="font-medium">
                  Contact No
                </TableCell>
                <TableCell> {userDetails.contact_no}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell id="project_Key" className="font-medium">
                  Email
                </TableCell>
                <TableCell>{userDetails.email}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
        {!userDetails && <h1>Loading...</h1>}
      </div>
    </div>
  );
};

export default general_Details;
