import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Titulo = styled.h1`
    margin: 40px 0 32px 48px;
    font-size: 1.8rem;
`;

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
`;

export const Div = styled.div`
    max-width: 15%;
    margin-left: 3rem;
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
    background-color: black;
`;