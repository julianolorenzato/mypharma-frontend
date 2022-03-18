import styled from "styled-components";

export const Container = styled.div`
    height: fit-content;
    width: 20%;
    background-color: transparent;
`

export const FilterBox = styled.div`
    width: 100%;
    height: fit-content;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #222;
    background-color: aliceblue;

    h3 {
        align-self: center;
        margin: 0;
        margin-top: 20px;
    }

    div {
        width: 100%;
        padding: 20px;
        text-align: center;
        display: flex;
        flex-wrap: wrap;

        span {
            margin: 5px;
            flex-grow: 1;
            background-color: skyblue;
            padding: 6px;
            border-radius: 20px;
            border: 2px solid transparent;
            cursor: pointer;
            transition: all .2s;

            &:hover {
                background-color: #fff;
                border: 2px solid #222;
            }
        }
    }
`