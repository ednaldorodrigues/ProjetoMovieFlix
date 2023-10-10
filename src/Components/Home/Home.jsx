import React from 'react';
import { Titulo,Container, Div } from './style.jsx';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import Capa from '../../Capa/Capa.jsx';

const apiKey = import.meta.env.VITE_API_KEY;
const moviesURL = import.meta.env.VITE_API;

const Home = () => {
  const [dados, setDados] = React.useState(null);

  const moviesPopulares = async (url) => {

    try {
      const response = await fetch(url);
      const data = await response.json();
      if(data.results) {
        setDados(data.results.filter((dado) => dado.poster_path !== null));
      }
    } catch {
      alert('Erro ao buscar dados da API');
    }
  };

  React.useEffect(() => {
    const apiURL = `${moviesURL}popular?${apiKey}&language=pt-BR`;
    moviesPopulares(apiURL);
  }, []);

  return (
    <main>
      <Capa />
      <Titulo>Filmes Populares</Titulo>
      
      <Container>
        {dados && dados.map((movie) => (
          <Div key={movie.id}>
            <MoviesCard movie={movie}/>        
          </Div>
        ))}
      </Container>
     
    </main>
  );
  
};

export default Home;
