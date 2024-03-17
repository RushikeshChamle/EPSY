"use client";
import React, { useEffect } from "react";
import "rrweb-player/dist/style.css";
import * as rrweb from "rrweb";
import "../styles.css";
import { Separator } from "@/components/ui/separator";
import LinkIcon from "@mui/icons-material/Link";
import rrwebPlayer from "rrweb-player";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

import RootLayout from "@/app/layout";

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

export default function SessionDetails({ params }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchReplayedEvents();
  }, []);

  const fetchReplayedEvents = () => {
    const sessionId = window.location.pathname.split("/").pop();

    // Fetch the replayed events from the backend
    fetch(`http://localhost:8000/replay/${sessionId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched events:", data);
        setEvents(data || []);
      })
      .catch((error) => {
        console.error("Error fetching replayed events:", error);
      });
  };

  useEffect(() => {
    if (events.length > 0) {
      const player = new rrwebPlayer({
        target: document.getElementById("player"),
        props: {
          events: events,
          width: 600,
          height: 300,
        },
      });

      player.play();
    }
  }, [events]);

  return (
    <RootLayout showNavbar={true}>
      <div className="detailsnav">
        <div>
          <h2>Session Replay</h2>
        </div>
        <br />
        <br />
        <div id="player"></div>
      </div>
    </RootLayout>
  );
}
