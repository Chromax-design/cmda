import { Speaker } from "@/data/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type speakerState = {
  speaker: null | Speaker;
  isViewSpeakerOpen: boolean;
  isDeleteSpeakerOpen: boolean;
  isEditSpeakerOpen: Boolean;
};

const initialState: speakerState = {
  speaker: null,
  isViewSpeakerOpen: false,
  isDeleteSpeakerOpen: false,
  isEditSpeakerOpen: false,
};

export const SpeakerSlice = createSlice({
  name: "speakerslice",
  initialState,
  reducers: {
    showSpeakerDetails: (state, action: PayloadAction<Speaker>) => {
      state.isViewSpeakerOpen = true;
      state.speaker = action.payload;
      document.body.style.overflow = "hidden";
    },
    closeSpeakerDetails: (state) => {
      state.isViewSpeakerOpen = false;
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
    openEditSpeakerModal: (state, action: PayloadAction<Speaker>) => {
      state.isEditSpeakerOpen = true;
      state.speaker = action.payload;
      document.body.style.overflow = "hidden";
    },
    closeEditSpeakerModal: (state) => {
      state.isEditSpeakerOpen = false;
      state.speaker = null;
      document.body.style.overflow = "auto";
    },
  },
});

export const {
  closeSpeakerDetails,
  showSpeakerDetails,
  closeDeleteSpeakerModal,
  openDeleteSpeakerModal,
  closeEditSpeakerModal,
  openEditSpeakerModal,
} = SpeakerSlice.actions;
