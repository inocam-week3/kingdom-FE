import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken : "",
  decodeToken : {}
}

const authSlice = createSlice({
  name : "authSlice",
  initialState,
  reducers : {
    postAuth : (state, action) => {
      return state
    }
  }
})

export default authSlice.reducer;
export const selectToken = (state) => state.authSlice;
export const { postAuth } = authSlice.actions;