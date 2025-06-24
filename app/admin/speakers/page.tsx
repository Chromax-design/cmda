import { SpeakerColumn } from "@/components/dashboard/columns/SpeakerColumns";
import DeleteSpeaker from "@/components/dashboard/speakers/DeleteSpeaker";
import EditSpeaker from "@/components/dashboard/speakers/EditSpeaker";
import { DataTable } from "@/components/ui/DataTable";
import { speakers } from "@/data/data";
import React from "react";

const Speakers = () => {
  return (
    <div className="col-span-12 lg:col-span-9 bg-primary rounded-xl p-4">
      <div className="bg-background p-4 h-full rounded-xl shadow-lg space-y-4">
        <h2 className="font-poppins text-lg tracking-wide">All Speakers</h2>
        <DataTable columns={SpeakerColumn} data={speakers}>
          {/* <SpeakerDetails /> */}
          <DeleteSpeaker />
          <EditSpeaker />
        </DataTable>
      </div>
    </div>
  );
};

export default Speakers;
