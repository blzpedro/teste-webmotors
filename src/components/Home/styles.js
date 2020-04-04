import styled from 'styled-components'

export const Box = styled.div`
    font-size: 1em;
    padding: 0.25em 1em;
    max-width: 933px;
    max-height: 312px;
    margin: 0 auto;
`;

export const HomeContainer = styled.div`    
    background-color: #e4e4e4;
    margin: 0 auto;
    img{
        padding: 5px 20px;
    }
`

export const Container = styled.div`
    font-size: 1em;
    margin: 0 0 1em 0;
    background-color: white;
`;

export const TabsInline = styled.div`
    display: inline-flex;
    button{
        display: flex;   
        background-color: transparent;
        border: 0;
        margin-top: 1em;    
        outline: none;
        cursor: pointer;
    }
    i{
        color: red;
        margin: 0 20px 0 10px;
    }
    p{
        color: gray;
        font-size: 12px;
        span {
            text-transform: uppercase;
            font-size: 18px;
            color: red;
        }
    }
`;

export const EndButton = styled.div`
    margin-left: auto;
    align-items: center;
    display: flex;
    button{
        background-color: transparent;
        border: 2px solid orange;
        color: orange;
        font-weight: bold;
        padding: 10px 40px;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
    }
`;