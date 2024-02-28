"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    console.log("ComboboxDemo mounted");
    return () => {
      console.log("ComboboxDemo unmounted");
    };
  }, []);

  console.log("open:", open);
  console.log("value:", value);

  return (
    <div>
      {/* //this is events combobox */}
      <Popover onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            // aria-expanded={open}

            onClick={() => console.log("Button clicked")}
            style={{
              position: "relative",
              left: "16rem",
              top: "-33px",
              height: "34px",
              background: "white",
              color: "black",
              width: "15rem",

              border: "0.5px solid gray",
            }}
          >
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : "Select Events"}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Select Events" className="h-9" />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <div>
        {/* //this is filter combobox */}
        <Popover onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              // aria-expanded={open}

              onClick={() => console.log("Button clicked")}
              style={{
                position: "relative",
                left: "16rem",
                top: "-10px",
                height: "34px",
                background: "white",
                color: "black",
                width: "15rem",

                border: "0.5px solid gray",
              }}
            >
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : "select filter"}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="select User" className="h-9" />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {framework.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div></div>
    </div>
  );
}
