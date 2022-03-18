import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL

export const getAllProducts = createAsyncThunk('products/getAll', async () => {
	try {
		const resp = await axios.get(`${BASE_URL}/products`)
		return resp.data
	} catch (err) {
		return err.response.data
	}
})

export const delProduct = createAsyncThunk('products/del', async (productId) => {
	try {
		const resp = await axios.delete(`${BASE_URL}/products/remove/${productId}`)
		return resp.data
	} catch (err) {
		return err.response.data
	}
})

export const addProduct = createAsyncThunk('products/add', async (prodData) => {
	try {
		const resp = await axios.post(`${BASE_URL}/products/add`, prodData)
		return resp.data
	} catch (err) {
		return err.response.data
	}
})

export const updateProduct = createAsyncThunk(
	'products/update',
	async (data) => {
		try {
			const resp = await axios.put(
				`${BASE_URL}/products/update/${data.prevProduct._id}`,
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

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false
			state.isSuccess = false
			state.errMsg = ''
		}
	},
	extraReducers: {
		[getAllProducts.pending]: (state) => {
			state.isLoading = true
		},
		[getAllProducts.fulfilled]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = true
			state.list = payload
		},
		[getAllProducts.rejected]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = false
			state.list = []
			state.errMsg = payload
		},
		[delProduct.fulfilled]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = true
			state.list = state.list.filter(prod => prod._id !== payload)
		},
		[delProduct.pending]: (state) => {
			state.isLoading = true
		},
		[delProduct.rejected]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = false
			state.errMsg = payload
		},
		[addProduct.fulfilled]: (state, { payload}) => {
			state.list.push(payload)
			state.isLoading = false
			state.isSuccess = true
		},
		[addProduct.pending]: (state) => {
			state.isLoading = true
		},
		[addProduct.rejected]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = false
			state.errMsg = payload
		},
		[updateProduct.fulfilled]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = true
			state.list = state.list.map((product) => {
				if(product._id === payload._id) return payload
					return product
			})
		},
		[updateProduct.pending]: (state) => {
			state.isLoading = true
		},
		[updateProduct.rejected]: (state, { payload }) => {
			state.isLoading = false
			state.isSuccess = false
			state.errMsg = payload
		},
	}
})

export const { reset } = productsSlice.actions
export default productsSlice.reducer
