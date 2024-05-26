"use client";
import { Toaster } from "@/components/ui/toaster";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useToast } from "@/components/ui/use-toast";
import Alert from "@mui/material/Alert";
import { useState, useEffect } from "react";
import { Clipboard } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

import { ScrollBar } from "@/components/ui/scroll-area";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

import React, { useRef } from "react";

import "../style.css";
import { Input } from "@/components/ui/input";

import SettingOption from "../page";

const accountSetting = () => {
  const { toast } = useToast();
  const scriptRef = useRef(null);
  const [projectId, setProjectId] = useState(null); // Initialize projectId state

  useEffect(() => {
    const token = localStorage.getItem("token");

    console.log("Token is : ", token);

    if (!token) {
      console.error("Token not found in local storage");
      return;
    }

    // Fetch projectId from the API
    fetch("http://localhost:9000/sessiondata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`, // Replace with your actual token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.projects.length > 0) {
          setProjectId(data.projects[0].ProjectId);
        }
      })
      .catch((error) => {
        console.error("Error fetching projectId:", error);
        // Handle error
      });
  }, []);

  const copyScript = () => {
    if (scriptRef.current) {
      const scriptText = scriptRef.current.innerText;
      navigator.clipboard
        .writeText(scriptText)
        .then(() => {
          // Optionally, you can provide some feedback to the user after copying
          alert("Script copied to clipboard!");
        })
        .catch((error) => {
          console.error("Failed to copy script: ", error);
        });
    }
  };

  return (
    <div>
      <SettingOption />

      <div id="accountSetting" className="settingsidepage">
        <div
          id="ssss"
          style={{
            position: "relative",
          }}
        >
          {/* <ScrollArea className="h-[1500px] w-[910px] rounded-md border p-4"> */}
          <h1 className="settingTitle">Account settings</h1>

          <br />

          <label htmlFor="">Organisation Name</label>

          <span
            style={{
              fontSize: "14px",
            }}
          >
            Name of Organisation
          </span>
          {/* <Input
          style={{
            width: "50%",
          }}
         /> */}

          <br />
          <br />
          <label htmlFor="">Script</label>

          <p
            style={{
              fontSize: "12px",
            }}
          >
            Epsy's configurable web snippet allows you to (optionally)
            autocapture events, record user sessions, and more with no extra
            work. Place the following snippet in your website's HTML, ideally
            just above the &lt;/head&gt; tag.
          </p>

          <br />

          <ScrollArea className=" whitespace-nowrap rounded-md border">
            <div
              style={{
                backgroundColor: "black",
                color: "white",
              }}
            >
              {/* Your existing code */}
              <pre>
                <code ref={scriptRef}>
                  {`<script src="https://cdn.jsdelivr.net/npm/rrweb@latest/dist/record/rrweb-record.min.js"></script>
<script>
                          let events = [];
                          rrwebRecord({ emit(event) { events.push(event); } });
                          function save() { const project_id = ${projectId} ; const body = JSON.stringify({ project_id, events }); events = []; fetch("http://localhost:9000/record", { method: "POST", headers: { "Content-Type": "application/json", }, body, }); }
                          setInterval(save, 10 * 1000);
</script>`}
                </code>
              </pre>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          <div>
            <Button variant="outline" onClick={copyScript}>
              {" "}
              <Clipboard className="mr-2 h-4 w-4" />
              Copy Code
            </Button>
          </div>

          <br />

          <div>
            <label htmlFor="">Account Details</label>
            <br />

            <br />

            <ScrollArea className="h-[350px] w-[950px] rounded-md border p-4">
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
                      App ID
                    </TableCell>
                    <TableCell>4281057113</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell id="project_Name" className="font-medium">
                      Project Name
                    </TableCell>
                    <TableCell>Add Project Name</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell id="project_Key" className="font-medium">
                      Project Key
                    </TableCell>
                    <TableCell>12345</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ScrollArea>
          </div>
          {/* </ScrollArea> */}
        </div>
      </div>
    </div>
  );
};
export default accountSetting;
