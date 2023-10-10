import styled from 'styled-components';

export const Section = styled.section`
    background-image: ${({ backdrop }) => backdrop ? `linear-gradient(rgba(4, 81, 119, 0.6), rgba(4, 81, 119, 0.6)), url(${backdrop})` : 'none'};
    background-size: cover;
    background-position: center;
    width: 100%;
    height: auto;
    padding: 2rem 0;
    width: 100%;
    padding: 2rem 0;
`;

export const Container = styled.div`
    display: flex;
    margin-left: 4rem;
    gap: 3rem;
    color: #fff;
`;

export const Conteudo = styled.div`
    margin-top: 3rem;
    margin-right: 1rem;
    width: 100%;
`;

export const Titulo = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
`;

export const Generos = styled.p`
    
`;

export const Avaliacao = styled.p`
    font-size: 2rem;
    background: #032145;
    padding: 1.1rem;
    display: inline-block;
    border-radius: 1rem;
    &:after {
        content: '%';
        font-size: .8rem;
        font-weight: bold;
        position: absolute;
    }
`;

export const ContainerAvaliacao = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;
    font-weight: bold;
`;

export const Sinopse = styled.h3`
    font-size: 1.4rem;
`; 

export const Img = styled.img`
    border-radius: 8px;
    display: block;
    min-width: 300px;
    max-width: 300px;
    transition: .4s;
    &:hover {
        ${({ homepage }) => homepage ? 'transform: scale(1.02)' : ''}
    }
`;