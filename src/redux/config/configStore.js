import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { heavenRTKQuery } from '../api'
import authSlice from '../modules/authSlice'
import morkHomeDataJobsSlice from '../modules/morkServer/morkHomeDataJobsSlice'
import morkHomeDataStoiesSlice from '../modules/morkServer/morkHomeDataStoiesSlice'

export const store = configureStore({
  reducer: {
    authSlice,
    morkHomeDataJobsSlice,
    morkHomeDataStoiesSlice,
    [heavenRTKQuery.reducerPath] : heavenRTKQuery.reducer 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(heavenRTKQuery.middleware)
})

setupListeners(store.dispatch)