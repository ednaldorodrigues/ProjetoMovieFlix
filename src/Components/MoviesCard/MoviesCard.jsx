import React from 'react';
import { Div, Img, TituloFilme, Data, Avaliacao, LinkStyled } from './style.jsx';

const imgURL = import.meta.env.VITE_IMG;

export const formatarData = (data) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(data).toLocaleDateString('pt-BR', options);
};

const MoviesCard = ({ movie }) => {
  return (

    <Div>
      <LinkStyled to={`/movie/${movie.id}`}>
        <Img src={imgURL + movie.poster_path} alt="" />
        <TituloFilme>{movie.title}</TituloFilme>
      </LinkStyled>
      <Data>{formatarData(movie.release_date)}</Data>
      <Avaliacao>{movie.vote_average.toFixed(1).replace('.' , '')}</Avaliacao>         
    </Div>
    
  );
};

export default MoviesCard;
