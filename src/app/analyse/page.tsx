import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import "/Users/rushikesh/Documents/EPSY/src/app/globals.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import RootLayout from "../layout";

export default function page() {
  return (
    <RootLayout showNavbar={true}>
      <div className="detailsnav">
        <Tabs defaultValue="Usage" className="w-[400px]">
          <TabsList
            style={{
              width: "51rem",
              height: "3rem",
            }}
          >
            <TabsTrigger
              style={{
                width: "12rem",
              }}
              value="Usage"
            >
              Usage Over Time
            </TabsTrigger>
            <TabsTrigger
              style={{
                width: "12rem",
              }}
              value="Funnel"
            >
              Funnel
            </TabsTrigger>
            <TabsTrigger
              style={{
                width: "12rem",
              }}
              value="Journey"
            >
              Journey
            </TabsTrigger>
            <TabsTrigger
              style={{
                width: "12rem",
                // border: "2px solid black",
              }}
              value="Retention"
            >
              Retention
            </TabsTrigger>
            <TabsTrigger
              style={{
                width: "12rem",
              }}
              value="Influenece"
            >
              Influenece
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Usage">
            <Input type="text" placeholder="Name" />
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">Save Chart</Button>
            <Button>Save Chart</Button>
          </TabsContent>

          <TabsContent value="Funnel">
            Make changes to your Funnel here.
          </TabsContent>

          <TabsContent value="Journey">
            Make changes to your Journey here.
          </TabsContent>

          <TabsContent value="Retention">
            Make changes to your Retention here.
          </TabsContent>
          <TabsContent value="Influenece">
            Change your Influenece here.
          </TabsContent>
        </Tabs>
      </div>
    </RootLayout>
  );
}
