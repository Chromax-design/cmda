"use client";

import { Event, Speaker } from "@/data/types";
import { ColumnDef } from "@tanstack/react-table";
import { IoEllipsisHorizontal } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import {
  openDeleteSpeakerModal,
  openEditSpeakerModal,
  showSpeakerDetails,
} from "@/lib/features/SpeakerSlice";
import { useAppDispatch } from "@/lib/hooks";

export const scheduleColumn: ColumnDef<Event>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "date_time",
    header: "Day and Time",
    cell: ({ row }) => {
      const day = row.original.day;
      const time = row.original.time;
      return (
        <div className="text-center text-sm capitalize font-medium">
          <div>{day}</div>
          <div>{time}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "speaker",
    header: "Speaker",
    cell: ({ row }) => {
      const { name } = row.original.speakers;
      return name;
    },
  },
  {
    accessorKey: "options",
    header: "Options",
    cell: ({ row }) => {
      const dispatch = useAppDispatch();
      return (
        <div className="min-w-20 flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <IoEllipsisHorizontal className=" size-5 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>View</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
