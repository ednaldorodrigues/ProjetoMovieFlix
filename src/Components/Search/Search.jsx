import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import { Container, Div, Titulo } from './style.jsx';

const apiKey = import.meta.env.VITE_API_KEY;
const searchURL = import.meta.env.VITE_SEARCH;

const Search = () => {
  const [movies, setMovies] = React.useState('');
  const [searchParams] = useSearchParams('q');
  const query = searchParams.get('q');

  const pesquisa = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results.filter((movie) => movie.poster_path !== null));
  };

  React.useEffect(() => {
    const movieURL = `${searchURL}?${apiKey}&query=${query}&language=pt-BR`;
    pesquisa(movieURL);
  }, [query]);

  return (
    <div>
      <Titulo>Resultado para : "{query}"</Titulo>
      
      <Container>
        {movies && movies.map((movie) => (
          <Div key={movie.id}>
            <Link to={`/movie/${movie.id}`}><MoviesCard movie={movie}/></Link>        
          </Div>
        ))}
      </Container>
     
    </div>
  );
};

export default Search;
