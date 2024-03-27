// "use client";

// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import { ScrollArea } from "@/components/ui/scroll-area";

// import React from "react";
// import { Input } from "@/components/ui/input";
// import SearchIcon from "@mui/icons-material/Search";
// import { Separator } from "@/components/ui/separator";

// import "/Users/rushikesh/Documents/EPSY/src/app/data/style.css";
// import { useEffect, useState } from "react";
// import SettingOption from "/Users/rushikesh/Documents/EPSY/src/app/data/page.tsx";

// interface Event {
//   event_id: number;
//   event_name: string;
//   totalUsers: number;
//   createdAt: string;
//   event_properties: any;
// }

// const Templates = () => {
//   const [events, setEvents] = useState<Event[]>([]);

//   useEffect(() => {
//     async function fetchEvents() {
//       try {
//         // Fetch session data to get projectId
//         const token = localStorage.getItem("token");
//         const sessionResponse = await fetch(
//           "http://localhost:8000/sessiondata",
//           {
//             headers: {
//               Authorization: token,
//             },
//           }
//         );
//         if (!sessionResponse.ok) {
//           throw new Error("Failed to fetch session data");
//         }
//         const sessionData = await sessionResponse.json();
//         const projectId = sessionData.projects[0]?.ProjectId;

//         // Fetch events based on projectId
//         const eventsResponse = await fetch(
//           `http://localhost:8000/getevents?projectId=${projectId}`
//         );
//         if (!eventsResponse.ok) {
//           throw new Error("Failed to fetch events");
//         }
//         const eventsData = await eventsResponse.json();
//         setEvents(eventsData);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//       }
//     }

//     fetchEvents();
//   }, []);

//   return (
//     <div>
//       <SettingOption />

//       <div
//         id="plan_details"
//         className="settingsidepage"
//         style={{
//           position: "relative",

//           display: "flex",
//         }}
//       >
//         <div>
//           <h1
//             style={{
//               fontSize: "20px",
//               fontWeight: "500",
//             }}
//           >
//             Explore Raw Events
//           </h1>
//           <p
//             style={{
//               fontSize: "15px",
//               color: "grey",
//             }}
//           >
//             Epsy automatically captures everything. Find, analyze, and save the
//             events you care about most.
//           </p>

//           <br />

//           <Separator />

//           <br />
//         </div>

//         <div>
//           <label
//             htmlFor=""
//             style={{
//               fontSize: "14px",
//             }}
//           >
//             Search events by button text, form label, etc.
//           </label>

//           <Input
//             placeholder="Search"
//             style={{
//               width: "40%",
//               backgroundColor: "#eaeaea",
//               fontSize: "16px",
//               // color: "white",
//             }}
//           />
//         </div>

//         <br />

//         <ScrollArea>
//           <div>
//             <table
//               style={{
//                 fontSize: "14px",
//                 width: "100%",
//               }}
//             >
//               <TableHeader>
//                 <TableHead>Session ID</TableHead>
//                 <TableHead>Project ID</TableHead>
//                 <TableHead>Created Date</TableHead>
//                 <TableHead>event_properties</TableHead>
//               </TableHeader>
//               <TableBody>
//                 {events.map((event) => (
//                   <TableRow key={event.event_id}>
//                     <TableCell>{event.event_id}</TableCell>
//                     <TableCell>{event.event_name}</TableCell>
//                     <TableCell>{event.createdAt}</TableCell>
//                     <TableCell>{event.event_properties}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </table>
//           </div>
//         </ScrollArea>

//         <br />
//       </div>
//     </div>
//   );
// };

// export default Templates;
