import styled from 'styled-components'

export const Box = styled.div`
    font-size: 1em;
    margin: 1em 0;
    padding: 0.25em 1em;
    background-color: lightgray;
`;

export const HomeContainer = styled.div`    
    max-width: 933px;
    max-height: 312px;
    margin: 1em auto;
`

export const Container = styled.div`
    font-size: 1em;
    margin: 1em 0;
    padding: 0.25em 1em;
    background-color: white;
    height: 200px;
`;

export const TabsInline = styled.div`
    display: inline-flex;
    i{
        color: red;
    }
    p{
        color: gray;
        font-size: 12px;
        span {
            text-transform: uppercase;
            margin-right: 20px;
            font-size: 18px;
            color: red;
        }
    }
`;