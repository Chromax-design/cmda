import { Speaker } from "@/data/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type speakerState = {
  speaker: null | Speaker;
  isDeleteSpeakerOpen: boolean;
};

const initialState: speakerState = {
  speaker: null,
  isDeleteSpeakerOpen: false,
};

export const SpeakerSlice = createSlice({
  name: "speakerslice",
  initialState,
  reducers: {
    showSpeakerDetails: (state, action: PayloadAction<Speaker>) => {
      state.speaker = action.payload;
      document.body.style.overflow = "hidden";
    },
    closeSpeakerDetails: (state) => {
      state.speaker = null;
      document.body.style.overflow = "auto";
    },
    openDeleteSpeakerModal: (state) => {
      state.isDeleteSpeakerOpen = true;
      document.body.style.overflow = "hidden";
    },
    closeDeleteSpeakerModal: (state) => {
      state.isDeleteSpeakerOpen = false;
      document.body.style.overflow = "auto";
    },
  },
});

export const {
  closeSpeakerDetails,
  showSpeakerDetails,
  closeDeleteSpeakerModal,
  openDeleteSpeakerModal,
} = SpeakerSlice.actions;
