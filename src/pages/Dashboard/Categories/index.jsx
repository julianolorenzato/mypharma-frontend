import { useSelector } from 'react-redux'
import { List } from '../../../components/List'

export const DashboardCategories = () => {
	const categories = useSelector((state) => state.categories.list)

	return <List cat desc>{categories}</List>
}
