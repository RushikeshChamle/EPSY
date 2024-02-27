import React from "react";
import "../styles.css";
import { Separator } from "@/components/ui/separator";
import LinkIcon from "@mui/icons-material/Link";

import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { CopyIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export default function sessionDetails({ params }) {
  const id = params.id;

  return (
    <div
      id="detailspage"
      className="container"
      style={{
        position: "relative",
      }}
    >
      Session replay
      <div
        style={{
          position: "relative",
          right: "-63rem",
          top: "-2rem",
        }}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              style={{
                width: "8rem",
                height: "2rem",
              }}
            >
              <ContentCopyIcon sx={{ fontSize: 20, marginRight: "0.2rem" }} />{" "}
              Copy link
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Share link</DialogTitle>
              <DialogDescription>
                Anyone who has this link will be able to view this.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input
                  id="link"
                  defaultValue="https://ui.shadcn.com/docs/installation"
                  readOnly
                />
              </div>
              <Button type="submit" size="sm" className="px-3">
                <span className="sr-only">Copy</span>
                <CopyIcon className="h-4 w-4" />
              </Button>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div
        style={{
          position: "relative",
          right: "-53rem",
          top: "-4rem",
          width: "7rem",
        }}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              ShareIcon
              style={{
                width: "8rem",
                height: "2rem",
              }}
            >
              <ShareIcon sx={{ fontSize: 20, marginRight: "0.2rem" }} /> Share
              Replay
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Share Reply</DialogTitle>
              <br />
              <DialogDescription>
                Copy and paste the session URL or email it to your teammates. If
                they don't have a Epsy account they'll receive an invite to
                join.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Input
                  id="email"
                  className="col-span-6"
                  placeholder="Enter emails"
                />
              </div>
              <div className="grid grid-cols-1 row-span-5 items-center gap-4">
                <Textarea placeholder="Type your message here." />
              </div>
            </div>
            <DialogFooter>
              <Button variant="secondary">Copy Link</Button>
              <Button type="submit">Share</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Separator>
        <div>
          <h3
            style={{
              position: "relative",
              top: "1rem",
              color: "grey",

              fontSize: "14px",
            }}
          >
            http://127.0.0.1:5500/new.html
          </h3>

          <Button
            variant="link"
            style={{
              position: "relative",
              backgroundColor: "transparent",
              color: "white",
              left: "14rem",
              top: "-12px",
              fontSize: "14px",
            }}
          >
            <LinkIcon></LinkIcon>
          </Button>
        </div>
      </Separator>
      <Separator
        id="verticallseparator"
        orientation="vertical"
        style={{
          position: "relative",
          left: "39rem",
        }}
      >
        <div
          style={{
            position: "relative",
            right: "-1rem",
            width: "20rem",
            top: "1rem",
          }}
        >
          <h1
            style={{
              color: "lightblue",
            }}
          >
            8084269356103484
          </h1>
          <br />
          <p
            style={{
              color: "grey",
              fontSize: "14px",
            }}
          >
            Feb 22, 2024 2:08 AM IST
          </p>
          <p
            style={{
              color: "grey",
              fontSize: "14px",
            }}
          >
            Pune, MH, India
          </p>
        </div>

        <Input
          placeholder="Search for path, error & click on text"
          style={{
            position: "relative",
            width: "31rem",
            right: "-1rem",
            top: "4rem",
          }}
        ></Input>

        <div
          id="verticalscroller"
          style={{
            position: "relative",

            left: "0rem",
            top: "5rem",
          }}
        >
          {" "}
          <ScrollArea
            className="h-72 w-48 rounded-md border"
            style={{
              width: "34rem",
              height: "40rem",
              borderColor: "transparent",
            }}
          >
            <div id="tagid" className="p-6">
              {/* <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4> */}
              {tags.map((tag) => (
                <>
                  <div key={tag} className="text-sm">
                    {tag}
                  </div>
                  <Separator className="my-2" />
                </>
              ))}
            </div>
          </ScrollArea>
        </div>
      </Separator>
    </div>
  );
}
