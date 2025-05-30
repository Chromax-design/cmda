"use client";

import ModalContainer from "@/components/ModalContainer";
import { closeDeleteSpeakerModal } from "@/lib/features/SpeakerSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const DeleteSpeaker = () => {
  const dispatch = useAppDispatch();
  const isDeleteSpeaker = useAppSelector(
    (state) => state.speakerslice.isDeleteSpeakerOpen
  );
  const handleCloseModal = () => {
    dispatch(closeDeleteSpeakerModal());
  };

  return (
    <ModalContainer
      className="max-w-md"
      isOpen={!!isDeleteSpeaker}
      onClose={handleCloseModal}
    >
      <div className="h-full p-6 rounded-2xl space-y-5">
        <h2 className="text-center font-poppins text-2xl capitalize font-medium">
          are you sure about this?
        </h2>
        <div className="flex justify-center gap-4">
          <button className="font-open-Sans capitalize py-2 px-4 rounded-sm bg-red-800 hover:bg-red-900 text-white font-medium cursor-pointer">
            yes, i am
          </button>
          <button
            className="font-open-Sans capitalize py-2 px-4 rounded-sm text-white font-medium cursor-pointer bg-secondary border-foreground hover:bg-secondary/80"
            onClick={() => handleCloseModal()}
          >
            close
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default DeleteSpeaker;
