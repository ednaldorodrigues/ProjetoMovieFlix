import React from 'react';
import { Titulo,Container, Error } from './style.jsx';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import Capa from '../../Capa/Capa.jsx';
import Loading from '../../Loading/Loading.jsx';
import useApi from '../../useApi/useApi.jsx';

const apiKey = import.meta.env.VITE_API_KEY;
const moviesURL = import.meta.env.VITE_API;

const Home = () => {
  const { data: dados, error, loading } = useApi(`${moviesURL}popular?${apiKey}&language=pt-BR`);

  if(loading) return <Loading />;
  if(error) return <Error>{error}</Error>;
  if(dados === null) return null;

  const dadosFiltrados = dados.results.filter((dado) => dado.poster_path !== null);
  
  return (
    <main>
      <Capa />
      <Titulo>Filmes Populares</Titulo>
      
      <Container>
        {dadosFiltrados.map((movie) => (
          <div key={movie.id}>
            <MoviesCard movie={movie}/>        
          </div>
        ))}
      </Container>
     
    </main>
  );
  
};

export default Home;
