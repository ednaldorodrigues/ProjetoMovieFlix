import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Titulo = styled.h1`
    margin: 2rem auto;
    font-size: 1.8rem;
    width: 90%;

    @media (max-width: 450px) {
       text-align: center;
    }
`;

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    margin: 0 auto;
    padding: 0 1rem;
    width: 90%;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 550px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
    background-color: black;
`;

export const Error = styled.p`
    margin-top: 2rem;
    font-size: 2rem;
    text-align: center;
`;