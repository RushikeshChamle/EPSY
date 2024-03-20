"use client";
import React from "react";
import "./styles.css";
import Link from "next/link";

import { DatePickerWithRange } from "../../components/UI/datepicker";

import { MainNavbar } from "/Users/rushikesh/Documents/EPSY/src/components/usedNav";
import { ComboboxDemo } from "../../components/UI/combobox";

import { Payment, columns } from "./column";
import { DataTable } from "./data-table";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import "/Users/rushikesh/Documents/EPSY/src/app/globals.css";

import RootLayout from "/Users/rushikesh/Documents/EPSY/src/app/layout.tsx";

import { useEffect, useState } from "react";

interface Session {
  session_id: number;
  project_id: number;
  created_date: string;
}

export default function Page() {
  const [sessions, setSessions] = useState<Session[]>([]);

  // useEffect(() => {
  //   async function fetchSessions() {
  //     try {
  //       const response = await fetch("http://localhost:8000/project/4");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch sessions");
  //       }
  //       const sessionsData = await response.json();
  //       setSessions(sessionsData);
  //     } catch (error) {
  //       console.error("Error fetching sessions:", error);
  //     }
  //   }

  //   fetchSessions();
  // }, []);

  useEffect(() => {
    async function fetchSessions() {
      try {
        // Fetch session data to get projectId
        const token = localStorage.getItem("token"); // Retrieve token from localStorage
        const response = await fetch("http://localhost:8000/sessiondata", {
          headers: {
            Authorization: token,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch session data");
        }
        const sessionData = await response.json();
        const projectId = sessionData.projects[0]?.ProjectId; // Assuming only one project for simplicity, adjust accordingly if needed

        // Fetch sessions based on projectId
        const sessionsResponse = await fetch(
          `http://localhost:8000/project/${projectId}`
        );
        if (!sessionsResponse.ok) {
          throw new Error("Failed to fetch sessions");
        }
        const sessionsData = await sessionsResponse.json();
        setSessions(sessionsData);
      } catch (error) {
        console.error("Error fetching sessions:", error);
      }
    }

    fetchSessions();
  }, []);

  const columns = [
    { id: "session_id", Header: "Session ID", accessor: "session_id" },
    { id: "project_id", Header: "Project ID", accessor: "project_id" },
    { id: "created_date", Header: "Created Date", accessor: "created_date" },
  ];

  return (
    <RootLayout showNavbar={true}>
      <div className="detailsnav">
        <div
          id="bodycontent"
          style={{
            position: "relative",
            left: "2rem",
          }}
        >
          <h2 id="title">Session</h2>
          <h2 id="event">Filter by event</h2>
          <h2 id="user">Filter by User</h2>
          <h2 id="daterange">Select the Daterange</h2>
          <ComboboxDemo />

          <DatePickerWithRange />
          <div
            id="sessiondata"
            className="container mx-auto py-20"
            style={{
              position: "relative",
              left: "-1rem",
              width: "calc(100%)",
            }}
          >
            <table className="shadow-md">
              <TableHeader>
                <TableHead>Session ID</TableHead>
                <TableHead>Project ID</TableHead>
                <TableHead>Created Date</TableHead>
              </TableHeader>

              <TableBody>
                {sessions.map((session, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      <Link href={`session/${session.session_id}`}>
                        {session.session_id}
                      </Link>
                    </TableCell>
                    <TableCell>{session.project_id}</TableCell>
                    <TableCell>{session.created_date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </table>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
