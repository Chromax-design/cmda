import { Speaker } from "@/data/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type speakerModalState = {
  speaker: null | Speaker;
};

const initialState: speakerModalState = {
  speaker: null,
};

export const SpeakerModalSlice = createSlice({
  name: "speakermodalslice",
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
  },
});

export const { closeSpeakerDetails, showSpeakerDetails } =
  SpeakerModalSlice.actions;
