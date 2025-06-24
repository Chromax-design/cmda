import { UserColumn } from "@/components/dashboard/columns/UserColumns";
import { DataTable } from "@/components/ui/DataTable";
import { users } from "@/data/data";
import React from "react";

const Users = () => {
  return (
    <div className="col-span-12 lg:col-span-9 bg-primary rounded-xl p-4">
      <div className="bg-background p-4 h-full rounded-xl shadow-lg space-y-4">
        <h2 className="font-poppins text-lg tracking-wide">All Users</h2>
        <DataTable columns={UserColumn} data={users} />
      </div>
    </div>
  );
};

export default Users;
