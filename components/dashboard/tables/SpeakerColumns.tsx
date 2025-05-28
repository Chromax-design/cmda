"use client";

import { Speaker } from "@/data/types";
import { ColumnDef } from "@tanstack/react-table";
import { IoEllipsisHorizontal } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";

export const SpeakerColumn: ColumnDef<Speaker>[] = [
  {
    accessorKey: "images",
    header: "",
    cell: ({ row }) => {
      return (
        <div className="min-w-20">
          <img
            src={row.original.images[0]}
            alt=""
            className="aspect-square rounded-lg size-14 object-center object-cover"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "mobile",
    header: "Phone Number",
  },
  {
    accessorKey: "profession",
    header: "Profession",
  },
  {
    accessorKey: "options",
    header: "Options",
    cell: ({ row }) => {
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
