import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { heavenRTKQuery } from '../api'
import authSlice from '../modules/authSlice'
 
export const store = configureStore({
  reducer: {
    authSlice,
    [heavenRTKQuery.reducerPath] : heavenRTKQuery.reducer 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(heavenRTKQuery.middleware)
})

setupListeners(store.dispatch)