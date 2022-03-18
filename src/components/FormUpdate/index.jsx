import { Container } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { updateBrand } from '../../store/brandsSlice'
import { updateCat } from '../../store/categoriesSlice'
import { updateProduct } from '../../store/productsSlice'

export const FormUpdate = ({ product, brand, cat, i }) => {
	const dispatch = useDispatch()

    const prevBrand = useSelector(state => state.brands.list[i])
    const prevCat = useSelector(state => state.categories.list[i])
    const prevProduct = useSelector(state => state.products.list[i])

	const [formData, setFormData] = useState({
		name: '',
		description: '',
		price: '',
		inventory: ''
	})

	const { name, description, price, inventory } = formData

	const handleChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()

        brand && dispatch(updateBrand({formData, prevBrand}))
		cat && dispatch(updateCat({formData, prevCat}))
		product && dispatch(updateProduct({formData, prevProduct}))
	}

	return (
		<Container onSubmit={handleSubmit}>
			<input
				type="text"
				name="name"
				value={name}
				placeholder="Nome"
				onChange={handleChange}
			/>
			{(product || cat) && (
				<input
					type="text"
					name="description"
					value={description}
					placeholder="Descrição"
					onChange={handleChange}
				/>
			)}
			{product && (
				<input
					type="text"
					name="price"
					value={price}
					placeholder="Preço"
					onChange={handleChange}
				/>
			)}
			{product && (
				<input
					type="text"
					name="inventory"
					value={inventory}
					placeholder="Estoque"
					onChange={handleChange}
				/>
			)}
			<button type="submit">Confirmar</button>
		</Container>
	)
}
