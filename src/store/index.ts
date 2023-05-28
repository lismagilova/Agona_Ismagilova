import { configureStore } from '@reduxjs/toolkit'
import { AuthApi } from './auth'

export const store = configureStore({
    devTools: true,
    reducer: {
        [AuthApi.reducerPath]: AuthApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([AuthApi.middleware])
})