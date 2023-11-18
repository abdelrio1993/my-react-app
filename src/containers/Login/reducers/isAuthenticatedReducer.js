import { createSlice } from '@reduxjs/toolkit'

export const isAuthenticatedReducer = createSlice({
  name: 'isAuthenticated',
  initialState: {
    value:false
  },
  reducers: {
    setIsAuthenticatedAction: (state, action) => {
        state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIsAuthenticatedAction } = isAuthenticatedReducer.actions

export default isAuthenticatedReducer.reducer


