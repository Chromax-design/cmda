import React, { useState } from "react";
import Subheading from "./Subheading";
import Heading from "./Heading";
import Tab from "./Tab";
import { eventSchedule, tabs } from "@/data/data";
import { Event } from "@/data/types";
import Eventcard from "./Eventcard";

const Schedule = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].day);
  const selectedEvents = eventSchedule.filter(
    (eventx: Event) => eventx.day === activeTab
  );

  return (
    <section className="max-w-6xl mx-auto py-20 space-y-10 px-3">
      <div className="flex flex-col lg:flex-row gap-10 justify-between items-center ">
        <div className="flex flex-col gap-2 items-center lg:items-start">
          <Subheading subheading="event schedule" />
          <Heading heading="follow event schedule" />
        </div>
        <div className="flex gap-4">
          {tabs.map((tab) => {
            return (
              <Tab
                day={tab.day}
                date={tab.date}
                key={tab.id}
                isActiveTab={activeTab === tab.day}
                onClick={() => setActiveTab(tab.day)}
              />
            );
          })}
        </div>
      </div>
      <div className="space-y-10">
        {selectedEvents.map((event: Event, i) => {
          const isEven = i % 2 === 0;
          return <Eventcard event={event} key={event.id} isEven={isEven} />;
        })}
      </div>
    </section>
  );
};

export default Schedule;
