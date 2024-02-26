"use client";
import { MoreHorizontal } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertOutlined } from "@mui/icons-material";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);
export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },

  {
    accessorKey: "amount",

    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div>
          <div
            style={{
              position: "relative",
              left: "6rem",
            }}
          >
            <Dialog>
              <DialogTrigger>View Events</DialogTrigger>

              <DialogContent
                style={{
                  maxWidth: "1000px",
                  height: "40rem",
                  borderColor: "grey",

                  borderRadius: 6,
                }}
              >
                <DialogHeader>
                  <DialogTitle>
                    Events for Session ID #4364053517479241 from User near Pune,
                    Maharashtra, India
                  </DialogTitle>
                  <DialogDescription
                    style={{
                      position: "relative",
                      top: "1rem",
                    }}
                  >
                    Session with 21 events in a minute
                  </DialogDescription>

                  <DialogDescription
                    style={{
                      position: "relative",
                      top: "4rem",
                    }}
                  >
                    All Events
                  </DialogDescription>

                  <DialogDescription
                    style={{
                      top: "38px",
                      position: "relative",
                      left: "8rem",
                    }}
                  >
                    <Popover>
                      {/* This is used to show the popup with events details */}
                      <PopoverTrigger>Show Events</PopoverTrigger>

                      {/* This is Content */}

                      <PopoverContent style={{}}>
                        <div
                          id="popup23"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 20,
                          }}
                        >
                          <p className="Text" style={{ marginBottom: 10 }}>
                            Event Properties
                          </p>

                          <ScrollArea className="h-[200px]  rounded-md border p-5">
                            <div
                              style={{
                                position: "relative",
                                width: "16rem",
                                padding: "1rem",
                              }}
                            >
                              <span>Type</span>
                              <span>Pageview</span>

                              <br />
                              <span>Domain</span>
                              <span>abc.com</span>

                              <br />
                              <span>Type</span>
                              <span>Pageview</span>

                              <br />
                              <span>Domain</span>
                              <span>abc.com</span>
                              <br />
                              <span>Type</span>
                              <span>Pageview</span>
                              <br />
                              <span>Domain</span>
                              <span>abc.com</span>
                              <br />
                              <span>Type</span>
                              <span>Pageview</span>

                              <br />
                              <span>Domain</span>
                              <span>abc.com</span>
                              <br />
                              <span>Type</span>
                              <span>Pageview</span>

                              <br />
                              <span>Domain</span>
                              <span>abc.com</span>
                            </div>
                          </ScrollArea>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      );
    },
  },
];
