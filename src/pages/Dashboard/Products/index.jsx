import { useSelector } from 'react-redux'
import { List } from '../../../components/List'

export const DashboardProducts = () => {
	const products = useSelector((state) => state.products.list)
	return <List product desc>{products}</List>
}
