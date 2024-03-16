import React from "react";
import "./styles.css";
import Link from "next/link";

import { DatePickerWithRange } from "../../components/UI/datepicker";

import { MainNavbar } from "/Users/rushikesh/Documents/EPSY/src/components/usedNav";
import { ComboboxDemo } from "../../components/UI/combobox";

import { Payment, columns } from "./column";
import { DataTable } from "./data-table";

import RootLayout from "/Users/rushikesh/Documents/EPSY/src/app/layout.tsx";
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.

  return [
    {
      id: "728ed52f",
      time: "100",
      pageviewed: "2 Pages",
      user: "prasad@gmail.com",
    },

    {
      id: "728edee2f",
      time: "100",
      pageviewed: "2 Pages",
      user: "utsav@gmail.com",
    },

    {
      id: "728edee2f",
      time: "100",
      pageviewed: "2 Pages",
      user: "utsav@gmail.com",
    },

    // ...
  ];
}

export default async function page() {
  const data = await getData();

  return (
    <RootLayout showNavbar={true}>
      <div className="detailsnav">
        {/* <MainNavbar /> */}
        <div
          id="bodycontent"
          style={{
            position: "relative",
            left: "1rem",
          }}
        >
          <h2 id="title">Session</h2>
          <h2 id="event">Filter by event</h2>
          <h2 id="user">Filter by User</h2>
          <h2 id="daterange">Select the Daterange</h2>
          <ComboboxDemo />

          <DatePickerWithRange />

          <div
          // id="sessiondata"
          // className="container mx-auto py-20"
          // style={{
          //   position: "relative",
          //   left: "-19rem",
          //   width: "74rem",
          // }}
          >
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
