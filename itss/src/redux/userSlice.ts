import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../services/api'


export const checkUser = createAsyncThunk(
    'auth/checkUser',
    async ({ email, password }: { email: string, password: string }, _api) => {
        try {
            let res = await api.put('/') 
            return _api.fulfillWithValue(res.data)
        } catch (error: any) {
            return _api.rejectWithValue(error.message)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers : {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state, action) => {
            state.user = null

        },
    },
    // extraReducers: (builder) => {
        // builder.addCase(addAdmin.fulfilled, (state, action) => {
		// 	// state.users = action.payload
		// })
		// builder.addCase(addAdmin.rejected, (state, action) => {
		// 	toast.error('failed to add website admin')
		// })

    // }
})

export default userSlice.reducer