import { configureStore } from "@reduxjs/toolkit";
import { SpeakerSlice } from "./features/SpeakerSlice";
import { userApi } from "./apis/userApiSlice";
import { MobileNavSlice } from "./features/MobileNavSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [userApi.reducerPath]: userApi.reducer,
      speakerslice: SpeakerSlice.reducer,
      mobileslice: MobileNavSlice.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
