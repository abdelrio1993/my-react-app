import { createSlice } from '@reduxjs/toolkit'

export const loginReducer = createSlice({
  name: 'login',
  initialState: {
    value:{}
  },
  reducers: {
    saveLoginData: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { saveLoginData } = loginReducer.actions

export default loginReducer.reducer