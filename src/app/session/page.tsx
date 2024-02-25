import React from "react";
import "./styles.css";

import { MainNavbar } from "../components/usedNav";
import { ComboboxDemo } from "../../components/UI/combobox";

export default function page() {
  return (
    <div className="container">
      <h2 id="title">Session</h2>

      <h2 id="event">Filter by event</h2>
      <h2 id="user">Filter by User</h2>
      <h2 id="daterange">Selct the Daterange</h2>
    </div>
  );
}
