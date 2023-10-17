import React from 'react';
import { useSearchParams  } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Loading from '../../Loading/Loading.jsx';
import { Container, Div, Titulo, LinkStyled } from './style.jsx';

const apiKey = import.meta.env.VITE_API_KEY;
const searchURL = import.meta.env.VITE_SEARCH;

const Search = () => {
  const [movies, setMovies] = React.useState(null);
  const [erro, setErro] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [searchParams] = useSearchParams('q');
  const query = searchParams.get('q');

  const pesquisa = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if(data.results && data.results.length > 0) {
        setMovies(data.results.filter((movie) => movie.poster_path !== null && movie.vote_average !== 0));
        setErro(null);
      } else {
        setMovies([]);
        setErro(`Resultado para "${query}" não encontrado !`);
      }
    } catch {
      console.error('Erro ao buscar dados', erro);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const movieURL = `${searchURL}?${apiKey}&query=${query}&language=pt-BR`;
    pesquisa(movieURL);
  }, [query]);

  if(loading) return <Loading />;
  if(movies === null) return null;

  return (
    <div>
      <Titulo>{erro ? erro : `Resultado para : "${query}"`}</Titulo>
      
      <Container>
        {movies && movies.map((movie) => (
          <Div key={movie.id}>
            <LinkStyled to={`/movie/${movie.id}`}><MoviesCard movie={movie}/></LinkStyled>        
          </Div>
        ))}
      </Container>
     
    </div>
  );
};

export default Search;
