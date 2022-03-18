import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import brandsReducer from './brandsSlice'
import productsReducer from './productsSlice'
import categoriesReducer from './categoriesSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        brands: brandsReducer,
        products: productsReducer,
        categories: categoriesReducer
    }
})

export default store