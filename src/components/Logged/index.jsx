import { Container } from './styles'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, reset } from '../../store/authSlice'

export const Logged = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleLogout = () => {
		dispatch(logout())
		dispatch(reset())
		navigate('/')
	}

	return (
		<Container>
			<div>
				<img src="./avatar.svg" height={60} alt="avatar" />
				<span onClick={handleLogout}>Sair</span>
			</div>
		</Container>
	)
}
