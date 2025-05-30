import ModalContainer from "@/components/ModalContainer";
import { closeEditSpeakerModal } from "@/lib/features/SpeakerSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const EditSpeaker = () => {
  const isEditSpeaker = useAppSelector(
    (state) => state.speakerslice.isEditSpeakerOpen
  );
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(closeEditSpeakerModal());
  };

  return (
    <ModalContainer
      isOpen={!!isEditSpeaker}
      onClose={handleCloseModal}
      className="max-w-4xl"
    >
      <div className="h-full p-6 rounded-2xl space-y-5 bg-primary">
        <h2 className="text-left font-poppins text-2xl capitalize font-medium">
          Speaker details
        </h2>
        <form></form>
        <div className="flex justify-end">
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

export default EditSpeaker;
