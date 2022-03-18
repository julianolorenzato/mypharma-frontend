import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL

export const getAllBrands = createAsyncThunk('brands/getAll', async () => {
	try {
		const resp = await axios.get(`${BASE_URL}/brands`)
		return resp.data
	} catch (err) {
		return err.response.data
	}
})

export const delBrand = createAsyncThunk('brands/del', async (brandName) => {
	try {
		const resp = await axios.delete(
			`${BASE_URL}/brands/remove/${brandName}`
		)
		return resp.data
	} catch (err) {
		return err.response.data
	}
})

export const addBrand = createAsyncThunk('brands/add', async (brandData) => {
	try {
		const resp = await axios.post(`${BASE_URL}/brands/add`, brandData)
		return resp.data
	} catch (err) {
		return err.response.data
	}
})

export const updateBrand = createAsyncThunk(
	'brands/update',
	async (data) => {
		try {
			const resp = await axios.put(
				`${BASE_URL}/brands/update/${data.prevBrand.name}`,
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

export const brandsSlice = createSlice({
	name: 'brands',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false
			state.isSuccess = false
			state.errMsg = ''
		}
	},
	extraReducers: {
		[getAllBrands.pending]: (state) => {
			state.isLoading = true
		},
		[getAllBrands.fulfilled]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = true
			state.list = payload
		},
		[getAllBrands.rejected]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = false
			state.list = []
			state.errMsg = payload
		},
		[delBrand.fulfilled]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = true
			state.list = state.list.filter((brand) => brand.name !== payload)
		},
		[delBrand.pending]: (state) => {
			state.isLoading = true
		},
		[delBrand.rejected]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = false
			state.errMsg = payload
		},
		[addBrand.fulfilled]: (state, { payload }) => {
			state.list.push(payload)
			state.isLoading = false
			state.isSuccess = true
		},
		[addBrand.pending]: (state) => {
			state.isLoading = true
		},
		[addBrand.rejected]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = false
			state.errMsg = payload
		},
		[updateBrand.fulfilled]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = true
			state.list = state.list.map((brand) => {
				if(brand._id === payload._id) return payload
					return brand
			})
		},
		[updateBrand.pending]: (state) => {
			state.isLoading = true
		},
		[updateBrand.rejected]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = false
			state.errMsg = payload
		},
	}
})

export const { reset } = brandsSlice.actions
export default brandsSlice.reducer
