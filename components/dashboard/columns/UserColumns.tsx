"use client";

import { userTypes } from "@/data/types";
import { ColumnDef } from "@tanstack/react-table";
import EditUser from "../modals/users/EditUser";
import DeleteUser from "../modals/users/DeleteUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserColumn: ColumnDef<userTypes>[] = [
  {
    accessorKey: "image",
    header: "",
    cell: ({ row }) => {
      const initials = row.original.username.slice(0, 2);
      return (
        <div className="min-w-20">
          <Avatar className="!size-14 !rounded-lg">
            <AvatarImage
              src={row.original.imageUrl}
              className="object-cover object-center"
            />
            <AvatarFallback className="uppercase">{initials}</AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    accessorKey: "username",
    header: "User name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "isAdmin",
    cell: ({ row }) => {
      const role = row.original.role;
      const isAdmin = role === "admin";
      return <EditUser />;
    },
  },
  {
    accessorKey: "option",
    header: "Option",
    cell: ({ row }) => {
      return (
        <div className="min-w-20 flex justify-center gap-2">
          <DeleteUser />
        </div>
      );
    },
  },
];
