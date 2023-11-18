import { createSlice } from "@reduxjs/toolkit";

export const permissionsListReducer = createSlice({
  name: "permissionsList",
  initialState: {
    value: [],
  },
  reducers: {
    permissionsListAction: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { permissionsListAction } = permissionsListReducer.actions;

export default permissionsListReducer.reducer;
