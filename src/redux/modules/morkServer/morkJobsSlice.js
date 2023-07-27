import { createSlice } from "@reduxjs/toolkit";

const morkJobsSlice = createSlice({
  name:"morkJobsSlice",
  initialState: [],
  reducers: {
    getJobsData : (state, action) => {
      return [...action.payload]
    },
    deleteJobsDate : (state, action) => {
      return [...state.filter(job => job.id !== +action.payload)]
    }
  }
})

export default morkJobsSlice.reducer
export const { getJobsData, deleteJobsDate } = morkJobsSlice.actions
export const selectJobsDate = state => state.morkJobsSlice