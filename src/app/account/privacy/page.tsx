import React from "react";
import { Button } from "@/components/ui/button"; // Check this import path

import { Clipboard } from "lucide-react";

import "../style.css";

import SettingOption from "../page";

const Page = () => {
  return (
    <div>
      <SettingOption />
      <div id="this" className="settingsidepage">
        {" "}
        {/* Removed extra space in id */}
        <div>
          <h1>This is rushikeshchamle 5</h1>
          <Button variant="outline">
            {" "}
            <Clipboard className="mr-2 h-4 w-4" />
            Secondary
          </Button>{" "}
          {/* Make sure variant is set to "secondary" */}
        </div>
      </div>
    </div>
  );
};

export default Page;
