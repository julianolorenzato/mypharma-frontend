import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    button {
        background-color: black;
        border: none;
        border-radius: 20px;
        color: #fff;
        width: 70px;
        padding: 10px;
        cursor: pointer;
        transition: all .2s;

        &:hover {
            color: #222;
            background-color: #fff;
        }
    }
`

export const Item = styled.div`
    width: 100%;
    height: 80px;
    margin-top: 5px;
    background-color: skyblue;
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        list-style: none;
        width: 16.6%;
        display: flex;
        justify-content: center;
    }
`
