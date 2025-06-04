import React from "react";
import Avatar from "./Avatar";
import { closeSpeakerDetails } from "@/lib/features/SpeakerSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import ModalContainer from "./ModalContainer";

const SpeakerDetails = () => {
  const speaker = useAppSelector((state) => state.speakerslice.speaker);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(closeSpeakerDetails());
  };

  return (
    <ModalContainer
      isOpen={!!speaker}
      onClose={handleCloseModal}
      className="lg:max-w-4xl max-w-2xl"
    >
      {speaker && (
        <div className="lg:grid lg:grid-cols-12 lg:gap-5 max-lg:space-y-10 px-4 md:px-6 pt-3 pb-6">
          <div className="col-span-12 md:col-span-5 bg-secondary h-full p-6 rounded-2xl flex justify-center items-center">
            <Avatar speaker={speaker} />
          </div>
          <div className="col-span-12 lg:col-span-7 h-full space-y-6">
            <div className="space-y-4">
              <h2 className=" font-poppins text-2xl font-semibold">
                Biography
              </h2>
              <p className=" font-open-Sans text-sm leading-5.5">
                {speaker.biography}
              </p>
            </div>
            <div className=" space-y-4">
              <h2 className="font-poppins text-2xl font-semibold">
                Personal Info
              </h2>
              <div className="bg-secondary rounded-xl border border-gray-700">
                <div className="p-4">
                  <h3 className="text-sm capitalize font-poppins text-pinkish">
                    mobile number
                  </h3>
                  <p className="font-open-Sans text-sm">{speaker.mobile}</p>
                </div>
                <hr className="h-[1px] bg-gray-700 border-none" />
                <div className="p-4">
                  <h3 className="text-sm capitalize font-poppins text-pinkish">
                    address
                  </h3>
                  <p className="font-open-Sans text-sm">{speaker.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ModalContainer>
  );
};

export default SpeakerDetails;
