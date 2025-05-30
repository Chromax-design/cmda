import { configureStore } from "@reduxjs/toolkit";
import { SpeakerSlice } from "./features/SpeakerSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      speakerslice: SpeakerSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
