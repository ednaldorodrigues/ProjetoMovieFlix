import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Titulo = styled.h1`
    margin: 40px 0 20px 48px;
    font-size: 1.8rem;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: relative;
`;

export const Img = styled.img`
    border-radius: 8px;
    transition: .3s ease;
    &:hover {
        transform: scale(1.03);
    }
`;

export const TituloFilme = styled.p`
    font-weight: bold;
    font-size: 0.925rem;
    margin-bottom: .5rem;
    margin-top: 1rem;
    &:hover {
        color: #11C7C2;
    }
`;

export const Data = styled.p`
    font-size: 0.925rem;
    font-weight: bold;
    color: #999898;
    margin-bottom: 1rem;
`;

export const Avaliacao = styled.span`
    display: flex;
    background: #032541;
    position: absolute;
    top: -5px;
    left: -5px;
    padding: 10px;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    border: 1px solid #11C7C2;
    &::after {
        content: '%';
        font-size: .6rem;
        align-items: center;
    }
`;

export const LinkStyled = styled(Link)`
    color: #000;
    text-decoration: none;
`;