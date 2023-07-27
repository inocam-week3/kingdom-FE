import { createSlice } from "@reduxjs/toolkit";


const morkHomeDataStoriesSlice = createSlice({
  name:"morkHomeDataStoriesSlice",
  initialState:[],
  reducers:{
    // Home-Stories 조회
    getHomeMorkDataStories : (state, action) => {
      return  [...action.payload]
    }
  }
})

export default morkHomeDataStoriesSlice.reducer
export const { getHomeMorkDataStories } = morkHomeDataStoriesSlice.actions;
export const selectGetHomeStories = state => state.morkHomeDataStoiesSlice