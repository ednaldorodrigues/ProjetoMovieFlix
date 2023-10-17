import React from 'react';
import { Titulo,Container, Div } from './style.jsx';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import Capa from '../../Capa/Capa.jsx';
import Loading from '../../Loading/Loading.jsx';

const apiKey = import.meta.env.VITE_API_KEY;
const moviesURL = import.meta.env.VITE_API;

const Home = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState(null);

  const moviesPopulares = async (url) => {

    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if(data.results) {
        setDados(data.results.filter((dado) => dado.poster_path !== null));
      }
    } catch {
      setErro('Erro ao obter dados.');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const apiURL = `${moviesURL}popular?${apiKey}&language=pt-BR`;
    moviesPopulares(apiURL);
  }, []);

  if(loading) return <Loading />;
  if(erro) return <p>{erro}</p>;
  if(dados === null) return null;
  
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
