import { useSelector } from 'react-redux'
import { List } from '../../../components/List'

export const DashboardBrands = () => {
	const brands = useSelector((state) => state.brands.list)
	return <List brand>{brands}</List>
}
