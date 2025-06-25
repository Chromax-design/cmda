"use client";

import { userTypes } from "@/data/types";
import { ColumnDef } from "@tanstack/react-table";
import EditUser from "../modals/users/EditUser";
import DeleteUser from "../modals/users/DeleteUser";

export const UserColumn: ColumnDef<userTypes>[] = [
  {
    accessorKey: "image",
    header: "",
    cell: ({ row }) => {
      const image = row.original.imageUrl || "";
      return (
        <div className="min-w-20">
          <img
            src={image}
            alt=""
            className="aspect-square rounded-lg size-14 object-center object-cover"
          />
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
          {/* <EditUser /> */}
        </div>
      );
    },
  },
];
