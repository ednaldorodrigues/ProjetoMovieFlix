import React from 'react';
import { useSearchParams  } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Loading from '../../Loading/Loading.jsx';
import { Container, Titulo, LinkStyled, Error } from './style.jsx';
import useApi from '../../useApi/useApi';

const apiKey = import.meta.env.VITE_API_KEY;
const searchURL = import.meta.env.VITE_SEARCH;

const Search = () => {
  const [searchParams] = useSearchParams('q');
  const query = searchParams.get('q');
  const { data: movies, error, loading } = useApi(`${searchURL}?${apiKey}&query=${query}&language=pt-BR`);

  if(loading) return <Loading />;
  if(error) return <Error>{error}</Error>;
  if(!movies) return null;

  const moviesFiltrados = movies.results.filter((movie) => movie.poster_path !== null && movie.vote_average !== 0);
  if(moviesFiltrados.length === 0) return <Error>{`Resultado para : "${query}" não encontrado.`}</Error>;

  return (
    <div>
      <Titulo>{`Resultado para : "${query}"`}</Titulo>
      
      <Container>
        {moviesFiltrados.map((movie) => (
          <div key={movie.id}>
            <LinkStyled to={`/movie/${movie.id}`}><MoviesCard movie={movie}/></LinkStyled>        
          </div>
        ))}
      </Container>
     
    </div>
  );
};

export default Search;
