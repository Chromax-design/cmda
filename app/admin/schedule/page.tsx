import { scheduleColumn } from "@/components/dashboard/columns/scheduleColumns";
import { DataTable } from "@/components/ui/DataTable";
import { eventSchedule } from "@/data/data";
import React from "react";

const Schedule = () => {
  return (
    <div className="col-span-12 lg:col-span-9 bg-card rounded-xl p-4">
      <div className="bg-background p-4 h-full rounded-xl shadow-lg space-y-4">
        <h2 className="font-poppins text-lg tracking-wide">All Speakers</h2>
        <DataTable columns={scheduleColumn} data={eventSchedule} />
      </div>
    </div>
  );
};

export default Schedule;
