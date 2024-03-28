"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ScrollArea } from "@/components/ui/scroll-area";

import { cn } from "@/lib/utils";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "/Users/rushikesh/Documents/EPSY/src/app/globals.css";
import { Separator } from "@/components/ui/separator";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Input } from "antd";
import RootLayout from "../layout";

export default function page() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <RootLayout showNavbar={true}>
      <div className="detailsnav">
        <Tabs defaultValue="Usage" className="w-[400px]">
          <TabsList
            style={{
              width: "51rem",
              height: "3rem",
              position: "relative",
              left: "3rem",
              top: "1rem",
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
                width: "15rem",
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
            <Input
              style={{
                height: "37px",
                background: "#f0f0f0",
                position: "relative",
                top: "1.5rem",
                left: "3rem",
              }}
              type="text"
              placeholder="Add your chart name"
            />

            <Button
              style={{
                position: "relative",
                left: "78rem",
                top: "-2rem",
              }}
            >
              Save Chart
            </Button>

            <Separator
              id="Separateotes"
              style={{
                position: "relative",
                width: "85rem",
                height: "2.5px",
                top: "1.5rem",
              }}
            />

            <div>
              <Card
                style={{
                  position: "relative",
                  top: "3rem",
                  width: "81rem",
                  left: "3rem",
                }}
              >
                <CardContent>
                  <Tabs defaultValue="Conversion Rate" className="w-[400px]">
                    <TabsList>
                      <TabsTrigger value="Conversion Rate">
                        Conversion Rate
                      </TabsTrigger>
                      <TabsTrigger value="password">Total Events</TabsTrigger>
                      <TabsTrigger value="Ratio">Ratio</TabsTrigger>
                      <TabsTrigger value="Unique Users">
                        Unique Users
                      </TabsTrigger>
                      <TabsTrigger value="User Behavior">
                        User Behavior
                      </TabsTrigger>
                      <TabsTrigger value="Session">Session</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Conversion Rate">
                      <div
                        id="selectionEvents"
                        style={{
                          position: "relative",
                          top: "1rem",
                          width: "5rem",
                        }}
                      >
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={open}
                              className="w-[200px] justify-between"
                            >
                              {value
                                ? frameworks.find(
                                    (framework) => framework.value === value
                                  )?.label
                                : "Select framework..."}
                              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[200px] p-0">
                            <Command>
                              <CommandInput
                                placeholder="Search framework..."
                                className="h-9"
                              />
                              <CommandEmpty>No framework found.</CommandEmpty>
                              <CommandGroup>
                                {frameworks.map((framedwork) => (
                                  <CommandItem
                                    key={framedwork.value}
                                    value={framedwork.value}
                                    onSelect={(currentValue) => {
                                      setValue(
                                        currentValue === value
                                          ? ""
                                          : currentValue
                                      );
                                      setOpen(false);
                                    }}
                                  >
                                    {framedwork.label}
                                    <CheckIcon
                                      className={cn(
                                        "ml-auto h-4 w-4",
                                        value === framedwork.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div
                        id="selectionEvent2"
                        style={{
                          position: "relative",
                          left: "17rem",
                          top: "-28px",
                        }}
                      >
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={open}
                              className="w-[200px] justify-between"
                            >
                              {value
                                ? frameworks.find(
                                    (framework) => framework.value === value
                                  )?.label
                                : "Select framework..."}
                              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[200px] p-0">
                            <Command>
                              <CommandInput
                                placeholder="Search framework..."
                                className="h-9"
                              />
                              <CommandEmpty>No framework found.</CommandEmpty>
                              <CommandGroup>
                                {frameworks.map((framework) => (
                                  <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                      setValue(
                                        currentValue === value
                                          ? ""
                                          : currentValue
                                      );
                                      setOpen(false);
                                    }}
                                  >
                                    {framework.label}
                                    <CheckIcon
                                      className={cn(
                                        "ml-auto h-4 w-4",
                                        value === framework.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </div>
                    </TabsContent>
                    <TabsContent value="password">
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[200px] justify-between"
                          >
                            {value
                              ? frameworks.find(
                                  (framework) => framework.value === value
                                )?.label
                              : "Select framework..."}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput
                              placeholder="Search framework..."
                              className="h-9"
                            />
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                              {frameworks.map((framework) => (
                                <CommandItem
                                  key={framework.value}
                                  value={framework.value}
                                  onSelect={(currentValue) => {
                                    setValue(
                                      currentValue === value ? "" : currentValue
                                    );
                                    setOpen(false);
                                  }}
                                >
                                  {framework.label}
                                  <CheckIcon
                                    className={cn(
                                      "ml-auto h-4 w-4",
                                      value === framework.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost">+ Add Another</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="Funnel">d</TabsContent>

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

        <div
          style={{
            position: "relative",
            top: "5rem",
            left: "3rem",
          }}
        >
          <p
            style={{
              marginBottom: "25px",
            }}
          >
            Filter results
          </p>
          <p
            style={{
              marginBottom: "25px",
            }}
          >
            Group by
          </p>
          <p
            style={{
              marginBottom: "25px",
            }}
          >
            Date range
          </p>

          <Button>View Result</Button>
        </div>

        <Separator
          id="Separateddotes"
          style={{
            position: "relative",
            width: "85rem",
            height: "2.5px",
            top: "7rem",
          }}
        />
      </div>
    </RootLayout>
  );
}
