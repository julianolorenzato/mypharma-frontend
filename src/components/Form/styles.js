import styled from "styled-components";

export const Container = styled.form`
    width: 500px;
    min-height: 200px;
    height: fit-content;
    padding: 40px;
    background-color: skyblue;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        width: 100%;
        input {
            width: 100%;
            height: 50px;
            outline: none;
            border-radius: 6px;
            border: 1px solid gray;
            margin-bottom: 20px;
            font-size: 20px;
            padding: 10px;
        }
    }

    button {
        width: 100%;
        height: 50px;
        background-color: #222;
        border-radius: 6px;
        border: none;
        color: white;
        font-size: 16px;
        cursor: pointer;
        transition: all .2s;

        &:hover {
            background-color: white;
            color: #222;
            border: 3px solid #222;
        }
    }

    label {
        align-self: flex-start;
        display: block;
        width: 100%;
        padding: 5px;
        color: #cc1508;
        border: 2px solid #cc1508;
        border-radius: 6px;
        margin-top: 20px;
        background-color: #fff;
    }
`