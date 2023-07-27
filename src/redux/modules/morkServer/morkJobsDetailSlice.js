import { createSlice } from "@reduxjs/toolkit";

export const morkJobsDetailSlice = createSlice({
  name : "morkJobsDetailSlice",
  initialState : {},
  reducers : {
    getJobsDetailData : (_, action) => {
      return {...action.payload}
    },
    updateJobsDetailData : (state, action) => {
      return {...state, ...action.payload}
    }
  }
})

export default morkJobsDetailSlice.reducer
export const {getJobsDetailData, updateJobsDetailData } = morkJobsDetailSlice.actions
export const selectJobsDetail = state => state.morkJobsDetailSlice