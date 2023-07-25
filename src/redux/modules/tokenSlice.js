import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from 'jwt-decode'

const initialState = {
  decodeToken : {}
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
      return {}
    }
  }
})

export default tokenSlice.reducer
export const selectToken = (state) => state.tokenSlice
export const { setDecodeToken, deleteToken } = tokenSlice.actions