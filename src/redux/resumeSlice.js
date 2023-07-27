import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "./api";

const __getResumeThunk = createAsyncThunk(
  "getResumeThunk",
  async (_, thunkAPI) => {
    try {
      let res = await instance.get(`/api/resumes?page=1`); // 서버상태를 바꾸고요
      return thunkAPI.fulfillWithValue(res.data.info);
    } catch (error) {
      alert("error", error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const __postResumeThunk = createAsyncThunk(
  "postResumeThunk",
  async (payload, thunkAPI) => {
    try {
      await instance.post(`/api/resumes/write`, payload); // 서버상태를 바꾸고요
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      alert("error", error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const resumeSlice = createSlice({
  name: "resumeSlice",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (bulider) => {
    bulider
      //__getResumeThunk
      .addCase(__getResumeThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__getResumeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = [...action.payload]; // 리렌더링을 발생시키고요
      })
      .addCase(__getResumeThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      // __postResumeThunk
      .addCase(__postResumeThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__postResumeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = [...state.data, action.payload]; // 리렌더링을 발생시키고요
      })
      .addCase(__postResumeThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default resumeSlice.reducer;
export const selectionResume = (state) => state.resumeSlice;
export { __getResumeThunk, __postResumeThunk };
