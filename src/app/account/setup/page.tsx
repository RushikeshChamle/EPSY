import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { fontWeight } from "@mui/system";

export default function page() {
  return (
    <div
      style={{
        position: "absolute",
        right: "70rem",
        top: "17px",
      }}
    >
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="/account" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <div>
        <h1
          style={{
            position: "absolute",
            left: "28rem",
            top: "3rem",
            whiteSpace: "nowrap",
            fontSize: "26px",
          }}
        >
          Epsy Setup
        </h1>

        <h3
          style={{
            position: "absolute",

            top: "8rem",
            whiteSpace: "nowrap",
            fontWeight: "bold",
            fontSize: "17px",
          }}
        >
          Install Epsy on your Development environment
        </h3>
      </div>

      <p
        style={{
          position: "absolute",
          fontSize: "16px",
          whiteSpace: "nowrap",
          top: "10.5rem",
          color: "gray",
        }}
      >
        Select a platform to get started.
      </p>
      <div
        style={{
          position: "absolute",
          fontSize: "16px",
          whiteSpace: "nowrap",
          top: "14rem",
          left: "0rem",
          color: "white",
          padding: "0rem",
          width: "52rem",

          borderRadius: "8px",
          background: "grey",
        }}
      >
        <Accordion type="single" collapsible orientation="horizontal">
          {/* position: absolute;
    background: grey;
    color: white;
    border-radius: 8px;
    width: 52rem;
    left: 0rem;
    justify-content: flex-start;
    padding: 1rem; */}
          <AccordionItem value="item-1">
            <AccordionTrigger
              style={{
                right: "5rem",
              }}
            >
              Learn More About Epsy Analyics setup?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div
        style={{
          position: "absolute",

          whiteSpace: "nowrap",
        }}
      >
        <h3
          style={{
            position: "absolute",
            top: "18rem",

            whiteSpace: "nowrap",
          }}
        >
          What type of platform do you want to track?
        </h3>
        <p
          style={{
            position: "absolute",
            whiteSpace: "nowrap",
            fontSize: "16px",
            top: "20rem",
            color: "grey",
          }}
        >
          Don’t worry, you can add more than one! We’re just getting started.
        </p>
      </div>

      <div>
        <h3
          style={{
            position: "absolute",
            whiteSpace: "nowrap",
            fontSize: "16px",
            top: "27rem",
          }}
        >
          What type of platform do you want to track?
        </h3>
      </div>

      <div
        style={{
          position: "absolute",
          whiteSpace: "nowrap",
          fontSize: "16px",
          top: "32rem",
          left: "28rem",
        }}
      >
        <Tabs defaultValue="account" className="w-[900px] h-5">
          <TabsList>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="Google Tag MAnager">
              Google Tag MAnager
            </TabsTrigger>
          </TabsList>
          <TabsContent value="code">
            <h4
              style={{
                position: "absolute",
                fontSizeAdjust: "medium",
                left: "-28rem",
                bottom: "-5rem",
                fontSize: "16px",
              }}
            >
              Web Installation
            </h4>

            <p
              style={{
                position: "absolute",

                left: "-11rem",
                bottom: "-6rem",
                color: "grey",
                fontSize: "13px",
              }}
            >
              Copy and paste the snippet below before your website’s closing{" "}
              {"</head>}"} tag. Once installed, <br></br>Heap will automatically
              start receiving data.
            </p>

            <span> "Thiss "</span>
          </TabsContent>
          {/* //Googgle Tag Mananager UI */}
          <TabsContent value="Google Tag MAnager">
            <h4
              style={{
                position: "absolute",
                fontSizeAdjust: "medium",
                left: "-28rem",
                bottom: "-5rem",
                fontSize: "16px",
              }}
            >
              Google Web Installation
            </h4>

            <p
              style={{
                position: "absolute",

                left: "-11rem",
                bottom: "-6rem",
                color: "grey",
                fontSize: "13px",
              }}
            >
              Copy and paste the snippet below before your website’s closing{" "}
              {"</head>}"} tag. Once installed, <br></br>Heap will automatically
              start receiving data.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
