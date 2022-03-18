import { Container } from './styles'
import { Link } from 'react-router-dom'

export const AuthButtons = () => {
	return (
		<Container>
			<Link to="/login">Logar</Link>
			<Link to="/register">Registrar</Link>
		</Container>
	)
}
