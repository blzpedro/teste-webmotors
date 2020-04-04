import React from 'react';
import { Container } from '../styles'

export default function Content({selected}) {
    console.log(selected)
    return (
        <Container>
            <p>{selected}</p>
        </Container>
    );
}
