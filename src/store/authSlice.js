import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL
const user = JSON.parse(localStorage.getItem('user'))

export const register = createAsyncThunk(
	'auth/register',
	async (userData, thunkAPI) => {
		try {
			const resp = await axios.post(`${BASE_URL}/auth/register`, userData)

			if (resp.data) {
				localStorage.setItem('user', JSON.stringify(resp.data))
			}

			return resp.data
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data)
		}
	}
)

export const login = createAsyncThunk(
	'auth/login',
	async (userData, thunkAPI) => {
		try {
			const resp = await axios.post(`${BASE_URL}/auth/login`, userData)

			if (resp.data) {
				localStorage.setItem('user', JSON.stringify(resp.data))
			}

			return resp.data
		} catch (err) {
			return thunkAPI.rejectWithValue(err.response.data)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	localStorage.removeItem('user')
})

const initialState = {
	user: user ? user : null,
	isLoading: false,
	isSuccess: false,
	errMsg: ''
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false
			state.isSuccess = false
			state.errMsg = ''
		}
	},
	extraReducers: {
		[register.pending]: (state) => {
			state.isLoading = true
		},
		[register.fulfilled]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = true
			state.user = payload
		},
		[register.rejected]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = false
			state.user = null
			state.errMsg = payload
		},
		[login.pending]: (state) => {
			state.isLoading = true
		},
		[login.fulfilled]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = true
			state.user = payload
		},
		[login.rejected]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = false
			state.user = null
			state.errMsg = payload
		},
		[logout.fulfilled]: (state) => {
			state.user = null
		}
	}
})

export const { reset } = authSlice.actions
export default authSlice.reducer
