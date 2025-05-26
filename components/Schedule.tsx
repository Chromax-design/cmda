import React, { useState } from "react";
import Subheading from "./Subheading";
import Heading from "./Heading";
import Tab from "./Tab";
import { eventSchedule, tabs } from "@/data/data";
import { Event } from "@/data/types";
import Eventcard from "./Eventcard";
import EventModal from "./EventModal";
import { AnimatePresence } from "framer-motion";

const Schedule = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].day);
  const [eventDetails, setEventDetails] = useState<Event | null>(null);

  const showEventModal = (event: Event) => {
    setEventDetails(event);
    document.body.style.overflow = "hidden";
  };

  const closeEventModal = () => {
    setEventDetails(null);
    document.body.style.overflow = "auto";
  };

  const selectedEvents = eventSchedule.filter(
    (eventx: Event) => eventx.day === activeTab
  );

  return (
    <section className="max-w-6xl mx-auto py-20 space-y-10 px-3">
      <div className="flex flex-col xl:flex-row gap-10 justify-between items-center ">
        <div className="flex flex-col items-center xl:items-start">
          <Subheading subheading="event schedule" />
          <Heading heading="follow event schedule" />
        </div>
        <div className="flex gap-4 flex-wrap items-center justify-center">
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
      <div className="space-y-10 max-lg:grid grid-cols-1 md:grid-cols-2 gap-4">
        {selectedEvents.map((event: Event, i) => {
          const isEven = i % 2 === 0;
          return (
            <Eventcard
              event={event}
              key={event.id}
              isEven={isEven}
              openModal={() => showEventModal(event)}
            />
          );
        })}
      </div>
      <AnimatePresence>
        {eventDetails && (
          <EventModal
            eventDetails={eventDetails}
            closeModal={closeEventModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Schedule;
