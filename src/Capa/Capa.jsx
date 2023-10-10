import React from 'react';
import capa from '../img/capa-wick.jpg';
import { Figure, Img, Overlay, Titulo, Span } from './style';

const Capa = () => {
  return (
    <Figure>
      <Img src={capa} alt='capa-principal' />
      <Titulo><Span>Bem vindo.</Span> <br /> Milhões de filmes e Séries para descobrir, Explore já.</Titulo>
      <Overlay />
    </Figure>
  );
};

export default Capa;
