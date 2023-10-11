import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { formatarData } from '../MoviesCard/MoviesCard.jsx';
import { Container, Conteudo, Titulo, Sinopse, Img, Avaliacao, Section, ContainerAvaliacao, PosTitulo, Generos, Date } from './style.jsx';

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
  const { id } = useParams();

  const filme = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);
  }; 

  React.useEffect(() => {
    const filmeDetalhes = `${movieURL}${id}?${apiKey}&language=pt-BR`;
    filme(filmeDetalhes);
  }, [id]);

  const duracaoFormatada = movie && typeof movie.runtime === 'number' ? converterParaHorasEMinutos(movie.runtime) : '';

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
          </Conteudo>
        </Container>
      )}
    </Section>
    
  );
};

export default Movie;
