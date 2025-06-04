"use client";

import ModalContainer from "@/components/ModalContainer";
import { closeEditSpeakerModal } from "@/lib/features/SpeakerSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const EditSpeaker = () => {
  const baseStyle = `border border-white/20 px-6 py-3.5 outline-0 font-open-Sans placeholder:capitalize placeholder text-sm placeholder:tracking-wider w-full`;

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
      className="max-w-2xl lg:max-w-4xl"
    >
      <div className="h-full p-6 rounded-2xl space-y-5">
        <h2 className="text-left font-poppins text-2xl capitalize font-medium">
          edit speaker
        </h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="font-open-Sans tracking-wide inline-block"
              >
                Name
              </label>
              <input
                type="text"
                placeholder={"dr Jeff"}
                id="name"
                className={`${baseStyle} rounded-lg`}
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="profession"
                className="font-open-Sans tracking-wide inline-block"
              >
                Profession
              </label>
              <input
                type="text"
                placeholder={"consultant psychiatrist"}
                id="profession"
                className={`${baseStyle} rounded-lg`}
              />
            </div>
            <div className="space-y-2">
              <label className="font-open-Sans tracking-wide inline-block border-white/20">
                Phone Number
              </label>
              <PhoneInput
                defaultCountry="ng"
                inputClassName="!font-open-Sans !h-auto w-full !py-3.5 !px-3 !bg-primary !text-foreground !border-white/20"
                countrySelectorStyleProps={{
                  buttonClassName:
                    "!h-auto !py-3.5 !bg-secondary !border-white/20 !px-3",
                  dropdownStyleProps: {
                    className:
                      "!w-[350px] !bg-secondary !text-foreground !hover:bg-secondary",
                    listItemClassName:
                      "hover:!bg-white/10 selected:!bg-white/20 !transition-colors",
                  },
                }}
              />
            </div>
            <div className="space-y-2">
              <label className="font-open-Sans tracking-wide inline-block">
                Address
              </label>
              <input
                type="text"
                placeholder={"consultant psychiatrist"}
                id="address"
                className={`${baseStyle} rounded-lg`}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="font-open-Sans tracking-wide inline-block">
                Biography
              </label>
              <textarea
                placeholder="biography"
                className={`${baseStyle} min-h-50 rounded-xl`}
              ></textarea>
            </div>
          </div>
        </form>
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
