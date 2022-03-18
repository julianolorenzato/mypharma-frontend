import { Container } from './styles'
import { SideBar } from '../../components/SideBar'
import { ItemContainer } from '../../components/ItemContainer'
import { Card } from '../../components/Card'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllProducts } from '../../store/productsSlice'
import { getAllBrands } from '../../store/brandsSlice'

const ProductsPage = () => {
	const products = useSelector((state) => state.products)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllProducts())
		dispatch(getAllBrands())
	}, [])

	return (
		<Container>
			<SideBar />
			<ItemContainer>
				{products.list.map((p, i) => (
					<Card
						key={i}
						inventory={p.inventory}
						price={p.price}
						name={p.name}
						description={p.description}
						category={p.category && p.category.name}
						brand={p.brand && p.brand.name}
					/>
				))}
			</ItemContainer>
		</Container>
	)
}

export default ProductsPage
