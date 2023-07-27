import { createSlice } from "@reduxjs/toolkit";


const morkHomeDataJobsSlice = createSlice({
  name:"morkHomeDataJobsSlice",
  initialState:[],
  reducers:{
    // Home-Jobs 조회
    getHomeMorkDataJobs : (state, action) => {
      return [...action.payload]
    }
  }
})


export default morkHomeDataJobsSlice.reducer;
export const { getHomeMorkDataJobs } = morkHomeDataJobsSlice.actions;
export const selectGetHomeJobs = state => state.morkHomeDataJobsSlice