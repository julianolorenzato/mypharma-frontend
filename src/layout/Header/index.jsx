import { Container, Top, Bottom, Side } from './styles'
import { AuthButtons } from '../../components/AuthButtons'
import { Logged } from '../../components/Logged'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Header = () => {
	const user = useSelector((state) => state.auth.user)
	const headerLayout = user ? '"bottom side"' : '"bottom bottom"'

	return (
		<Container layout={headerLayout}>
			<Top>
				<li>
					<Link to="/">Início</Link>
				</li>
				<li>
					<Link to="/produtos">Produtos</Link>
				</li>
				{user && <li>
					<Link to="/dashboard">Dashboard</Link>
				</li>}
				{user && <span>Olá, {user.user.name}</span>}
			</Top>
			<Bottom>
				<li>Analgésicos</li>
				<li>Antibióticos</li>
				<li>Anti-inflamatórios</li>
				<li>Mais...</li>
			</Bottom>
			<Side>{user ? <Logged /> : <AuthButtons />}</Side>
		</Container>
	)
}
