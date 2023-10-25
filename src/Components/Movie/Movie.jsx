import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { formatarData } from '../MoviesCard/MoviesCard.jsx';
import { Container, Conteudo, Descricao, Titulo, Sinopse, Img, Avaliacao, Section, ContainerAvaliacao, PosTitulo, Generos, Date, ContainerDiretores , Lista, DiretorNome, JobNome, Error } from './style.jsx';
import Loading from '../../Loading/Loading.jsx';
import useApi from '../../useApi/useApi.jsx';

const apiKey = import.meta.env.VITE_API_KEY;
const movieURL = import.meta.env.VITE_API;
const imgURL = import.meta.env.VITE_IMG;

const converterParaHorasEMinutos = (duracaoEmMinutos) => {
  const horas = Math.floor(duracaoEmMinutos / 60);
  const minutos = duracaoEmMinutos % 60;
  return `${horas}h ${minutos}min`;
};

const Movie = () => {
  const { id } = useParams();
  const { data: movie, error, loading } = useApi(`${movieURL}${id}?${apiKey}&language=pt-BR`);
  const { data: credits } = useApi(`${movieURL}${id}/credits?${apiKey}&language=pt-BR`);

  const duracaoFormatada = movie && typeof movie.runtime === 'number' ? converterParaHorasEMinutos(movie.runtime) : '';

  if(loading) return <Loading />;
  if(error) return <Error>{error}</Error>;
  if(!movie || !credits ) return null;
  
  return (
    <Section backdrop={movie ? imgURL + movie.backdrop_path : ''}>
      {movie && (
        <Container>
          <picture>
            {movie.homepage ? <Link to={movie.homepage} target="_blank"><Img src={imgURL + movie.poster_path} homepage={movie ? movie.homepage : ''} alt="" /></Link> : <Img src={imgURL + movie.poster_path} alt="" />}
          </picture>

          <Conteudo>
            <Titulo>{movie.title} ({movie.release_date.substring(0, 4)})</Titulo>

            <PosTitulo>
              <Date>
                {formatarData(movie.release_date)}
              </Date>
              <Generos>
                {movie.genres.map((genre) => genre.name).join(', ')}
              </Generos>
              <span>{duracaoFormatada}</span>
            </PosTitulo>

            <ContainerAvaliacao>
              <Avaliacao>{movie.vote_average.toFixed(1).replace('.', '')}</Avaliacao>
              <p>Avaliação <br /> Usúarios</p>
            </ContainerAvaliacao>
            
            <Sinopse>Sinopse:</Sinopse>
            <Descricao>{movie.overview}</Descricao>
            
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
