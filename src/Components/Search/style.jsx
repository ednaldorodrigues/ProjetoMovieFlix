import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Titulo = styled.h1`
    margin: 2rem auto;
    font-size: 1.8rem;
    width: 90%;
`;

export const Container = styled.section`
   display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin: 0 auto;
    width: 90%;
`;

export const Div = styled.div`
    max-width: 17%;
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