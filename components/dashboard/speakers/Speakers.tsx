import React from "react";
import { SpeakerColumn } from "../columns/SpeakerColumns";
import { speakers } from "@/data/data";
import { DataTable } from "@/components/ui/DataTable";
import SpeakerDetails from "@/components/SpeakerDetails";
import DeleteSpeaker from "./DeleteSpeaker";
import EditSpeaker from "./EditSpeaker";

const Speakers = () => {
  return (
    <div className="col-span-12 lg:col-span-9 bg-primary rounded-xl p-4">
      <div className="bg-background p-4 h-full rounded-xl shadow-lg space-y-4">
        <h2 className="font-poppins text-lg tracking-wide">All Speakers</h2>
        <DataTable columns={SpeakerColumn} data={speakers}>
          <SpeakerDetails />
          <DeleteSpeaker />
          <EditSpeaker />
        </DataTable>
      </div>
    </div>
  );
};

export default Speakers;
