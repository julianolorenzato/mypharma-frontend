import { Container } from './styles'
import { addBrand } from '../../store/brandsSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addCat } from '../../store/categoriesSlice'
import { addProduct } from '../../store/productsSlice'

export const FormAdd = ({ product, brand, cat }) => {
	const dispatch = useDispatch()

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

		brand && dispatch(addBrand(formData))
		cat && dispatch(addCat(formData))
		product && dispatch(addProduct(formData))
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
			<button type="submit">Adicionar</button>
		</Container>
	)
}
