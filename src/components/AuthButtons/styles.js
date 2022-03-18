import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
    justify-content: space-around;

	a:nth-of-type(1) {
		color: #222;
		text-decoration: none;
        transition: all .2s;

        &:hover {
            color: #00B0FF
        }
	}
	a:nth-of-type(2) {
        display: block;
        padding: 12px 30px;
        border-radius: 40px;
        background-color: skyblue;
		color: #222;
		text-decoration: none;
        border: 3px solid transparent;
        transition: all .2s;

        &:hover {
            background-color: transparent;
            border: 3px solid #00B0FF;
        }
	}
`
