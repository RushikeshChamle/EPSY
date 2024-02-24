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
    <div style={{}}>
      <div
        className="top-header"
        style={{
          padding: "20px 0",
          position: "relative",
          left: "-41rem",
        }}
      >
        <Pagination>
          <PaginationPrevious href="/account" />
        </Pagination>
      </div>

      <div
        className="top-header"
        style={{
          backgroundColor: "lightcyan",
          padding: "20px 0",
          textAlign: "center",
        }}
      >
        <h1 style={{ whiteSpace: "nowrap", fontSize: "26px" }}>Epsy Setup</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3
          style={{
            position: "relative",
            top: "3rem",
            whiteSpace: "nowrap",
            fontWeight: "bold",
            fontSize: "17px",
          }}
        >
          Install Epsy on your Development environment
        </h3>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            position: "relative",
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
            position: "relative",
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
            <AccordionItem value="item-1">
              <AccordionTrigger
                style={{
                  right: "5rem",
                  padding: "10px 14px ",
                }}
              >
                Learn More About Epsy Analytics setup?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative", whiteSpace: "nowrap" }}>
          <h3
            style={{ position: "relative", top: "18rem", whiteSpace: "nowrap" }}
          >
            What type of platform do you want to track?
          </h3>
          <p
            style={{
              position: "relative",
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
              position: "relative",
              whiteSpace: "nowrap",
              fontSize: "16px",
              top: "26rem",
              left: "-29rem ",
            }}
          >
            Select Install Method
          </h3>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "relative",
              whiteSpace: "nowrap",
              fontSize: "16px",
              top: "32rem",
              left: "28rem",
            }}
          >
            <Tabs
              defaultValue="account"
              className="w-[900px] h-5"
              style={{
                position: "relative",
                left: "-6rem",
                top: "-129px",
              }}
            >
              <TabsList>
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="Google Tag Manager">
                  Google Tag Manager
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="code"
                style={{
                  position: "relative",
                }}
              >
                <h4
                  style={{
                    position: "relative",
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
                    position: "relative",

                    left: "-11rem",
                    bottom: "-3rem",
                    color: "grey",
                    fontSize: "13px",
                  }}
                >
                  Copy and paste the snippet below before your website’s closing{" "}
                  {"</head>}"} tag. Once installed, <br></br>Heap will
                  automatically start receiving data.
                </p>

                <textarea
                  rows="10"
                  cols="50"
                  readOnly
                  style={{
                    position: "relative",
                    left: "-8rem",
                    top: "9rem",
                    color: "white",
                    padding: "20px",
                    height: "123px",
                  }}
                >
                  `Previous Epsy SetupInstall Epsy on your Development
                  environment Select a platform to get started. Learn More About
                  Epsy Analytics setup? What type of platform do you want to
                  track?Don’t worry, you can add more than one! We’re just
                  getting started. What type of platform do you want to track?`
                </textarea>
              </TabsContent>

              {/* Google Tag Manager UI */}
              <TabsContent value="Google Tag Manager">
                <h4
                  style={{
                    position: "relative",
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
                    position: "relative",

                    left: "-11rem",
                    bottom: "-3rem",
                    color: "grey",
                    fontSize: "13px",
                  }}
                >
                  Copy and paste the snippet below before your website’s closing{" "}
                  {"</head>}"} tag. Once installed, <br></br>Heap will
                  automatically start receiving data.
                </p>

                <textarea
                  rows="10"
                  cols="50"
                  readOnly
                  style={{
                    position: "relative",
                    left: "-8rem",
                    top: "9rem",
                    color: "white",
                    padding: "20px",
                    height: "123px",
                  }}
                >
                  `Previous Epsy SetupInstall Epsy on your Development
                  environment Select a platform to get started. Learn More About
                  Epsy Analytics setup? What type of platform do you want to
                  track?Don’t worry, you can add more than one! We’re just
                  getting started. What type of platform do you want to track?`
                </textarea>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <div style={{ position: "relative", color: "black" }}>
        <div style={{}}></div>
      </div>
    </div>
  );
}
