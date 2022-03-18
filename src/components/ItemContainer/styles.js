import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    width: 79%;
	background-color: transparent;
    min-height: calc(100vh - 225px);
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 15px;
`
