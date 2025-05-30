import { configureStore } from "@reduxjs/toolkit";
import { SpeakerModalSlice } from "./features/SpeakerModalSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      speakermodalslice: SpeakerModalSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
