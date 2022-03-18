import styled from 'styled-components'

export const Container = styled.div`
    height: 300px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    color: #222;
    box-shadow: 0px 0px 15px #777;
    
    h3 {
        border-bottom: 2px solid #222;
        text-align: left;
        padding: 20px;
        margin: 0;
        width: 100%;
        color: #fff;
        background-color: #222;
    }

    
    p {
        width: 100%;
        height: fit-content;
        padding: 20px;
        margin: 0;
    }

    div {
        padding: 15px;
        height: fit-content;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: aliceblue;

        h4 {
            margin: 0;
            font-size: 24px;
        }
    }

`