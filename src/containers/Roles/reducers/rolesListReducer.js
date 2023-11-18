import { createSlice } from "@reduxjs/toolkit";

export const rolesListReducer = createSlice({
  name: "rolesList",
  initialState: {
    value: [],
  },
  reducers: {
    rolesListAction: (state, action) => {
      state.value = action.payload;
    },
    rolesAddAction: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { rolesListAction, rolesAddAction } = rolesListReducer.actions;

export default rolesListReducer.reducer;
