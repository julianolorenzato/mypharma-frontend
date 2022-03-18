import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL

export const getAllCats = createAsyncThunk('categories/getAll', async () => {
	try {
		const resp = await axios.get(`${BASE_URL}/categories`)
		return resp.data
	} catch (err) {
		return err.response.data
	}
})

export const delCats = createAsyncThunk('categories/del', async (catName) => {
	try {
		const resp = await axios.delete(
			`${BASE_URL}/categories/remove/${catName}`
		)
		return resp.data
	} catch (err) {
		return err.response.data
	}
})

export const addCat = createAsyncThunk('categories/add', async (catData) => {
	try {
		const resp = await axios.post(`${BASE_URL}/categories/add`, catData)
		return resp.data
	} catch (err) {
		return err.response.data
	}
})

export const updateCat = createAsyncThunk(
	'categories/update',
	async (data) => {
		try {
			const resp = await axios.put(
				`${BASE_URL}/categories/update/${data.prevCat.name}`,
				data.formData
			)
			return resp.data
		} catch (err) {
			return err.response.data
		}
	}
)

const initialState = {
	list: []
}

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false
			state.isSuccess = false
			state.errMsg = ''
		}
	},
	extraReducers: {
		[getAllCats.pending]: (state) => {
			state.isLoading = true
		},
		[getAllCats.fulfilled]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = true
			state.list = payload
		},
		[getAllCats.rejected]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = false
			state.list = []
			state.errMsg = payload
		},
		[delCats.fulfilled]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = true
			state.list = state.list.filter((cat) => cat.name !== payload)
		},
		[delCats.pending]: (state) => {
			state.isLoading = true
		},
		[delCats.rejected]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = false
			state.errMsg = payload
		},
		[addCat.fulfilled]: (state, { payload}) => {
			state.list.push(payload)
			state.isLoading = false
			state.isSuccess = true
		},
		[addCat.pending]: (state) => {
			state.isLoading = true
		},
		[addCat.rejected]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = false
			state.errMsg = payload
		},
		[updateCat.fulfilled]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = true
			state.list = state.list.map((cat) => {
				if(cat._id === payload._id) return payload
					return cat
			})
		},
		[updateCat.pending]: (state) => {
			state.isLoading = true
		},
		[updateCat.rejected]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = false
			state.errMsg = payload
		},
	}
})

export const { reset } = categoriesSlice.actions
export default categoriesSlice.reducer
