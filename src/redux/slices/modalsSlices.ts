import { createSlice } from "@reduxjs/toolkit";

interface OpenModalState {
  isOpenOrderModal: boolean;
}

const initialState: OpenModalState = {
  isOpenOrderModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openOrderModal: state => {
      state.isOpenOrderModal = true;
    },
    closeOrderModal: state => {
      state.isOpenOrderModal = false;
    },
  },
});

export const { openOrderModal, closeOrderModal } = modalSlice.actions;
export default modalSlice.reducer;
