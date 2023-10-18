import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { formatarData } from '../MoviesCard/MoviesCard.jsx';
import { Container, Conteudo, Titulo, Sinopse, Img, Avaliacao, Section, ContainerAvaliacao, PosTitulo, Generos, Date, ContainerDiretores , Lista, DiretorNome, JobNome } from './style.jsx';
import Loading from '../../Loading/Loading.jsx';

const apiKey = import.meta.env.VITE_API_KEY;
const movieURL = import.meta.env.VITE_API;
const imgURL = import.meta.env.VITE_IMG;

const converterParaHorasEMinutos = (duracaoEmMinutos) => {
  const horas = Math.floor(duracaoEmMinutos / 60);
  const minutos = duracaoEmMinutos % 60;
  return `${horas}h ${minutos}min`;
};

const Movie = () => {
  const [movie, setMovie] = React.useState(null);
  const [credits, setCredits] = React.useState(null);
  const [erro, setErro] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const { id } = useParams();

  const filme = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
    } catch {
      setErro('Erro ao buscar informações sobre esse filme');
    } finally {
      setLoading(false);
    }
  }; 

  const creditos = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setCredits(data);
  };

  React.useEffect(() => {
    const filmeDetalhes = `${movieURL}${id}?${apiKey}&language=pt-BR`;
    filme(filmeDetalhes);
    const creditosPessoas = `${movieURL}${id}/credits?${apiKey}&language=pt-BR`;
    creditos(creditosPessoas);
  }, [id]);

  const duracaoFormatada = movie && typeof movie.runtime === 'number' ? converterParaHorasEMinutos(movie.runtime) : '';

  if(loading) return <Loading />;
  if(erro) return <p>{erro}</p>;
  if(movie === null) return null;
  if(credits === null) return null;
  
  return (
    <Section backdrop={movie ? imgURL + movie.backdrop_path : ''}>
      {movie && (
        <Container>
          <picture>
            {movie.homepage ? <Link to={movie.homepage} target="_blank"><Img src={imgURL + movie.poster_path} homepage={movie ? movie.homepage : ''} alt="" /></Link> : <Img src={imgURL + movie.poster_path} alt="" />}
          </picture>

          <Conteudo>
            <Titulo>{movie.title} ({movie.release_date.substring(0, 4)})</Titulo>
            <PosTitulo><Date>{formatarData(movie.release_date)}</Date><Generos>{movie.genres.map((genre) => genre.name).join(', ')}</Generos>
              <span>{duracaoFormatada}</span>
            </PosTitulo>
            <ContainerAvaliacao>
              <Avaliacao>{movie.vote_average.toFixed(1).replace('.', '')}</Avaliacao>
              <p>Avaliação <br /> Usúarios</p>
            </ContainerAvaliacao>
            <Sinopse>Sinopse:</Sinopse>
            <p>{movie.overview}</p>
            
            <ContainerDiretores>
              {credits && credits.crew.filter((diretores) => diretores.job === 'Director' || diretores.job === 'Writer' || diretores.job === 'Screenplay').map((diretor, index) => (
                
                <Lista key={`${diretor.id}-${index}`}>
                  <DiretorNome>{diretor.name}</DiretorNome> <JobNome>{diretor.job}</JobNome>
                </Lista>
                
              ))}
            </ContainerDiretores>
            
          </Conteudo>
        </Container>
      )}
    </Section>
    
  );
};

export default Movie;
