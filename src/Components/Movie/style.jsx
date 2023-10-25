import styled from 'styled-components';

export const Section = styled.section`
    background-image: ${props =>
    props.backdrop
      ? `linear-gradient(rgba(4, 81, 119, 0.6), rgba(4, 81, 119, 0.6)), url(${props.backdrop})`
      : 'none'};
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

    @media (max-width: 920px) {
        flex-direction: column;
        align-items: center;
        margin-left: 0;
    }
`;

export const Conteudo = styled.div`
    flex-wrap: wrap;
    width: 100%;

    @media (max-width: 920px) {
        width: 90%;
    }
`;

export const Titulo = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
`;

export const PosTitulo = styled.p`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: .2rem;
    gap: 1.5rem;

    @media (max-width: 440px) {
        gap: 1rem;
        font-size: .9rem;
    }
`;

export const Generos = styled.span`
    &:after {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #fff;
        margin: 6px 12px;
        border-radius: 50%;

        @media (max-width: 440px) {
            margin: 6px 6px;
        }
    }
`; 

export const Date = styled.span`
    &:after {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #fff;
        margin: 6px 10px;
        border-radius: 50%;

        @media (max-width: 440px) {
            margin: 6px 6px;
        }
    }
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

    @media (max-width: 920px) {
        margin-bottom: .5rem;
    }
`; 

export const Descricao = styled.p`
    
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

export const ContainerDiretores = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0;

    @media (max-width: 920px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2rem;
    }
`;

export const Lista = styled.li`
    list-style: none;
    margin-bottom: 1rem;
`;

export const DiretorNome = styled.p`
    font-weight: bold;
`;

export const JobNome = styled.p`
    font-size: .9rem;
`;

export const Error = styled.p`
    margin-top: 2rem;
    font-size: 2rem;
    text-align: center;
`;