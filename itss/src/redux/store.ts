import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import productSlice from './productSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        products: productSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
