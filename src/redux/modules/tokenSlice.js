import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from 'jwt-decode'

const initialState = {
  decodeToken : null
}


const tokenSlice = createSlice({
  name :"tokenSlice",
  initialState,
  reducers : {
    setDecodeToken : (state, action) => {
      const decodeToken = jwt_decode(action.payload)
      return state = {...decodeToken}
    },
    deleteToken : () => {
      return null
    }
  }
})

export default tokenSlice.reducer
export const selectToken = (state) => state.tokenSlice
export const { setToken, deleteToken } = tokenSlice.actions