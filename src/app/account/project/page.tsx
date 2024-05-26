"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import SettingOption from "../page";
import { Import } from "lucide-react";
import { Button } from "@/components/ui/button";
import { jwtDecode } from "jwt-decode";

const GeneralDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
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
        } else {
          console.error("Failed to fetch user details");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    // Fetch user details using stored JWT token
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      fetchUserDetails(userId);
    }
  }, []);

  useEffect(() => {
    if (userDetails) {
      // Fetch projects based on the organization ID from user details
      const fetchProjects = async () => {
        try {
          const response = await fetch(
            `http://localhost:9000/projects/${userDetails.orgId}`
          );
          if (response.ok) {
            const projectsData = await response.json();
            setProjects(projectsData);
          } else {
            console.error("Failed to fetch projects");
          }
        } catch (error) {
          console.error("Error fetching projects:", error);
        }
      };

      fetchProjects();
    }
  }, [userDetails]);

  return (
    <div>
      <SettingOption />
      <div id="this" className="settingsidepage">
        <h1>Project Details</h1>
        <div
          style={{
            position: "relative",
            top: "6rem",
          }}
        >
          <Table
            style={{
              width: "calc(85%)",
            }}
          >
            <TableHeader>
              <TableRow>
                <TableHead>Project Name</TableHead>
                <TableHead>Project Code</TableHead>
                <TableHead>Created Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.Id}>
                  <TableCell className="font-medium">{project.Name}</TableCell>
                  <TableCell>{project.ProjectKey}</TableCell>
                  <TableCell>{project.CreatedAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default GeneralDetails;
