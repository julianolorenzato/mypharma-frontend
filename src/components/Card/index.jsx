import { Container } from './styles'

export const Card = ({ name, description, price, inventory, category, brand }) => {
	if (price)
		price = price.toLocaleString('pt-br', {
			style: 'currency',
			currency: 'BRL'
		})

	return (
		<Container>
			<h3>{name}</h3>
			<p>
				Descrição: <br />
				<br />
				{description}
			</p>
			{price && (
				<p>
					{category}
					<br />
					{brand}
				</p>
			)}
			{price && (
				<div>
					<h4>{price}</h4>
					<span>Estoque: {inventory}</span>
				</div>
			)}
		</Container>
	)
}
