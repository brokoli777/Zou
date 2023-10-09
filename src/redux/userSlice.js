import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  currentUser: null,
  loading: false,
  error: false
  }

  export const userSlice = createSlice({
    name: 'user',
    initialState: {
      value: 0
    },
    reducers: {
     loginStart: (state) => {
        state.loading = true;
     },
     loginSuccess: (state) => {
        state.loading = true;
        state.currentUser = action.payload
     },
     loginFailure: (state) => {
        state.loading = true;
        state.error=true;
     },
     logout: (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = false;
     }
    }
  })

  export const {loginStart,loginSuccess,loginFailure,logout} = userSlice.actions