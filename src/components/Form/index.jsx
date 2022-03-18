import { Container } from './styles'
import { MoonLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { login, register, reset } from '../../store/authSlice'

export const Form = ({ children, registerForm }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: ''
	})
	const { name, email, password } = formData

	const handleChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value
		}))
	}

	const auth = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
        if(registerForm) {
            dispatch(register(formData))
        }else {
            dispatch(login(formData))
        }
	}

	useEffect(() => {
		if (auth.isSuccess) {
			navigate('/dashboard')
		}
		dispatch(reset())
	}, [auth.isSuccess])

	if (auth.isLoading) {
		return (
			<Container>
				<MoonLoader />
			</Container>
		)
	}

	return (
		<Container onSubmit={handleSubmit}>
			{registerForm && (
				<div>
					<input
						onChange={handleChange}
						value={name}
						name="name"
						type="text"
						placeholder="Nome"
					/>
				</div>
			)}
			<div>
				<input
					onChange={handleChange}
					value={email}
					name="email"
					type="text"
					placeholder="E-mail"
				/>
			</div>
			<div>
				<input
					onChange={handleChange}
					value={password}
					name="password"
					type="password"
					placeholder="Senha"
				/>
			</div>
			<button type="submit">{registerForm ? 'Registrar' : 'Entrar'}</button>
            {auth.errMsg && <label>{auth.errMsg}</label>}
		</Container>
	)
}
