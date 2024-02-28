import React from "react";
import "./styles.css";
import Link from "next/link";

import { DatePickerWithRange } from "/Users/rushikesh/Documents/EPSY/src/components/UI/datepicker";

import { MainNavbar } from "/Users/rushikesh/Documents/EPSY/src/components/usedNav";
import { ComboboxDemo } from "../../components/UI/combobox";

import { Payment, columns } from "./column";
import { DataTable } from "./data-table";

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
    <div
      style={{
        position: "relative",
      }}
    >
      {/* <MainNavbar /> */}
      <div
        className="container"
        style={{
          position: "relative",
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
            left: "-19rem",
            width: "74rem",
          }}
        >
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}
