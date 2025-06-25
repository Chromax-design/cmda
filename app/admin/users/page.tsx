"use client";

import { UserColumn } from "@/components/dashboard/columns/UserColumns";
import CreateNewUser from "@/components/dashboard/modals/users/CreateNewUser";
import { DataTable } from "@/components/ui/DataTable";
import { users } from "@/data/data";
import { useGetAllUsersQuery } from "@/lib/apis/userApiSlice";

const Users = () => {
  // const { data: users, isLoading } = useGetAllUsersQuery();
  return (
    <div className="col-span-12 lg:col-span-9 bg-card rounded-xl p-4">
      <div className="bg-background p-4 h-full rounded-xl shadow-lg space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-poppins text-lg tracking-wide">All Users</h2>
          <CreateNewUser />
        </div>
        <DataTable columns={UserColumn} data={users ?? []} />
      </div>
    </div>
  );
};

export default Users;
