import styled from 'styled-components'

export const Container = styled.div`
    min-height: 500px;
	display: grid;
	grid-template-columns: 200px 1fr;
	grid-template-areas:
		'side items';
`

export const Side = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	background-color: #00b0ff;
	grid-area: side;

	a {
		height: 80px;
		border-bottom: 2px solid #fff;
		color: #fff;
		display: flex;
		align-items: center;
		padding-left: 20px;
		cursor: pointer;
        text-decoration: none;

		&:hover {
			background-color: aliceblue;
			color: #222;
			border-bottom: 2px solid #222;
		}
	}
`

export const Items = styled.div`
    background-color: aliceblue;
	grid-area: items;
`
