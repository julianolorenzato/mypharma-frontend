import { Container, Side, Items } from './styles'
import { useDispatch } from 'react-redux'
import { getAllBrands } from '../../store/brandsSlice'
import { getAllCats } from '../../store/categoriesSlice'
import { getAllProducts } from '../../store/productsSlice'
import { Link, Outlet } from 'react-router-dom'
import { useEffect } from 'react'

const Dashboard = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllBrands())
		dispatch(getAllProducts())
		dispatch(getAllCats())
	}, [])

	return (
		<Container>
			<Side>
				<Link to="produtos">Produtos</Link>
				<Link to="categorias">Categorias</Link>
				<Link to="marcas">Marcas</Link>
			</Side>
			<Items>
				<Outlet />
			</Items>
		</Container>
	)
}

export default Dashboard
