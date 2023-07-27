import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { heavenRTKQuery } from '../api'

import tokenSlice from '../modules/tokenSlice'
import morkHomeDataJobsSlice from '../modules/morkServer/morkHomeDataJobsSlice'
import morkHomeDataStoiesSlice from '../modules/morkServer/morkHomeDataStoiesSlice'
import morkJobsSlice from '../modules/morkServer/morkJobsSlice'
import morkJobsDetailSlice from '../modules/morkServer/morkJobsDetailSlice'

export const store = configureStore({
  reducer: {
    tokenSlice,
    morkHomeDataJobsSlice,
    morkHomeDataStoiesSlice,
    morkJobsSlice,
    morkJobsDetailSlice,
    [heavenRTKQuery.reducerPath] : heavenRTKQuery.reducer 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(heavenRTKQuery.middleware)
})

setupListeners(store.dispatch)