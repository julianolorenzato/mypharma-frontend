import React from 'react'
import ReactDOM from 'react-dom'

import GlobalStyle from './styles/global'

import { Header } from './layout/Header'
import HomePage from './pages/Home'
import ProductsPage from './pages/Products'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import Dashboard from './pages/Dashboard'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import { DashboardProducts } from './pages/Dashboard/Products'
import { DashboardCategories } from './pages/Dashboard/Categories'
import { DashboardBrands } from './pages/Dashboard/Brands'
import { Index } from './pages/Dashboard/IndexOutlet'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyle />
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="produtos" element={<ProductsPage />} />
					<Route path="dashboard" element={<Dashboard />}>
						<Route path='produtos' element={<DashboardProducts />}/>
						<Route path='categorias' element={<DashboardCategories />}/>
						<Route path='marcas' element={<DashboardBrands />}/>
						<Route index element={<Index />}/>
					</Route>
					<Route path="register" element={<RegisterPage />} />
					<Route path="login" element={<LoginPage />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
