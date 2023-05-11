import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { getGenre } from '../../store/app-data/app-data.selectors';
import { getFilmsData } from '../../store/films-data/films-data.selectors';
import { DEFAULT_GENRE_VALUE } from '../../const';

import FilmCard from '../film-card/film-card';

function FilmsList():JSX.Element {
  const [, setCardId] = useState<number | null>(null);
  const genre = useAppSelector(getGenre);
  const films = useAppSelector(getFilmsData);
  const filmsForRender = genre === DEFAULT_GENRE_VALUE ? films : films.filter((film) => film.genre === genre);

  const handleFilmCardMouseEnter = (id: number) => {
    setCardId(id);
  };

  return (
    <div className="catalog__films-list">
      {
        filmsForRender.map((film) => <FilmCard filmData={film} key={film.id} onMouseEnter={() => handleFilmCardMouseEnter(film.id)}/>)
      }
    </div>
  );
}

export default FilmsList;
