import { Container, Item } from './styles'
import { FormAdd } from '../FormAdd'
import { FormUpdate } from '../FormUpdate'

import { useDispatch } from 'react-redux'
import { delBrand } from '../../store/brandsSlice'
import { delProduct } from '../../store/productsSlice'
import { delCats } from '../../store/categoriesSlice'
import { useState } from 'react'

export const List = ({ children, product, brand, cat, desc }) => {
	const dispatch = useDispatch()

	const [formAdd, setFormAdd] = useState(false)
	const [formUpdate, setFormUpdate] = useState(false)
	const [itemIndex, setItemIndex] = useState(null)

	return (
		<Container>
			<Item style={{ backgroundColor: 'aliceblue' }}>
				<div>Nome</div>
				<div>{desc && 'Descrição'}</div>
				<div>{product && 'Preço'}</div>
				<div>{product && 'Estoque'}</div>
				<div></div>
				<div>
					<button
						onClick={() => {
							setFormAdd((f) => !f)
						}}
					>
						Novo
					</button>
				</div>
			</Item>
			{formAdd && <FormAdd product={product} brand={brand} cat={cat} />}
			{children.map((v, i) => (
				<>
					<Item key={i}>
						<div>{v.name}</div>
						<div>{v.description}</div>
						<div>{v.price}</div>
						<div>{v.inventory}</div>
						<div>
							<button
								onClick={() => {
									brand && dispatch(delBrand(v.name))
									product && dispatch(delProduct(v._id))
									cat && dispatch(delCats(v.name))
								}}
							>
								Remover
							</button>
						</div>
						<div>
							<button
								onClick={() => {
									setFormUpdate((f) => !f)
									setItemIndex(i)
								}}
							>
								Modificar
							</button>
						</div>
					</Item>
					{itemIndex === i && formUpdate && (
						<FormUpdate i={i} product={product} brand={brand} cat={cat} />
					)}
				</>
			))}
		</Container>
	)
}
