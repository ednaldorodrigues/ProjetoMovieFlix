import styled from 'styled-components';

export const Figure = styled.figure`
    margin: 0;
    padding: 0;
    position: relative;
    height: 400px;
    width: 100%;
    overflow: hidden;
`;

export const Img = styled.img`
    filter: grayscale(40%) brightness(50%);
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #045177;
    opacity: 0.4;
`;

export const Titulo = styled.h1`
    position: absolute;
    top: 150px;
    z-index: 1;
    padding-left: 3rem;
    color: #fff;
    font-size: 2.5rem;
`;

export const Span = styled.span`
font-size: 3rem;
`;