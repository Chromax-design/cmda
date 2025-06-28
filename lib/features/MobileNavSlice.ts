import { createSlice } from "@reduxjs/toolkit";

export const MobileNavSlice = createSlice({
  name: "mobileNavSlice",
  initialState: { isOpen: false },
  reducers: {
    openMobileNav: (state) => {
      state.isOpen = true;
    },
    closeMobileNav: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openMobileNav, closeMobileNav } = MobileNavSlice.actions;
