import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    span {
        font-size: 20px;
    }

    div {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        span {
            background-color: transparent;
            border: none;
            font-size: 16px;
            border-radius: 20px;
            border: 3px solid transparent;
            padding: 5px 10px;
            cursor: pointer;
            transition: all .2s;

            &:hover {
                border: 3px solid #222;
            }
        }
    }
`
