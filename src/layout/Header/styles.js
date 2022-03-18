import styled from 'styled-components'

export const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 250px;
	grid-template-rows: 100px 80px;
	grid-template-areas:
		"top side"
		${props => props.layout};
`

export const Top = styled.nav`
	grid-area: top;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	li {
		list-style: none;
		margin: 30px 15px;
		text-align: center;
		
		a {
			display: block;
			width: 120px;
			padding: 15px;
			color: #fff;
			background-color: #00B0FF;
			border-radius: 30px;
			text-decoration: none;
			transition: all .2s;

			&:hover {
				color: #222;
			}
		}
	}

	span {
		margin-left: auto;
	}
`

export const Bottom = styled.nav`
	border-top: 1px solid black;
	grid-area: bottom;
	display: flex;
	justify-content: flex-start;
	align-items: baseline;
	li {
		list-style: none;
		padding: 20px;
		cursor: pointer;
		transition: all .2s;

		&:hover {
			color: #00B0FF;
		}
	}
`

export const Side = styled.div`
	grid-area: side;
	display: flex;
	align-items: center;
`
