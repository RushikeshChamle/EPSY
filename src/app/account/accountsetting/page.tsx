"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";

import "../style.css";
import { Input } from "@/components/ui/input";

import SettingOption from "../page";

const accountSetting = () => {
  return (
    <div>
      <SettingOption />

      <div id="accountSetting" className="settingsidepage">
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
          Epsy's configurable web snippet allows you to (optionally) autocapture
          events, record user sessions, and more with no extra work. Place the
          following snippet in your website's HTML, ideally just above the
          &lt;/head&gt; tag.
        </p>

        <br />

        <textarea
          name="code"
          id="code"
          cols="30"
          rows="10"
          style={{
            color: "white",
          }}
        >
          `Previous Epsy SetupInstall Epsy on your Development environment
          Select a platform to get started. Learn More About Epsy Analytics
          setup? What type of platform do you want to track?Don’t worry, you can
          add more than one! We’re just getting started. What type of platform
          do you want to track?`
        </textarea>

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
  );
};
export default accountSetting;
