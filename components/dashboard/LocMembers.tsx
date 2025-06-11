import React from "react";
import { DataTable } from "../ui/DataTable";
import SpeakerDetails from "../SpeakerDetails";
import DeleteSpeaker from "./speakers/DeleteSpeaker";
import EditSpeaker from "./speakers/EditSpeaker";
import { LocColumn } from "./columns/LocColumns";
import { speakers } from "@/data/data";

const LocMembers = () => {
  return (
    <div className="col-span-12 lg:col-span-9 bg-primary rounded-xl p-4">
      <div className="bg-background p-4 h-full rounded-xl shadow-lg space-y-4">
        <h2 className="font-poppins text-lg tracking-wide">All LOCs</h2>
        <DataTable columns={LocColumn} data={speakers}>
          <SpeakerDetails />
          <DeleteSpeaker />
          <EditSpeaker />
        </DataTable>
      </div>
    </div>
  );
};

export default LocMembers;
