import { Container, FilterBox } from './styles'
import { useSelector } from 'react-redux'

export const SideBar = () => {
	const brands = useSelector((state) => state.brands.list)

	return (
		<Container>
			<FilterBox>
				<h3>Marcas:</h3>
				<div>
					{brands.map((b, i) => (
						<span key={i} htmlFor="marca">{b.name}</span>
					))}
				</div>
			</FilterBox>
		</Container>
	)
}
