import { useState } from 'react';
import { FilmData } from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  filmsData: FilmData[];
}

function FilmsList({ filmsData }:FilmsListProps):JSX.Element {
  const [, setCardId] = useState<number | null>(null);

  const handleFilmCardMouseEnter = (id: number) => {
    setCardId(id);
  };

  return (
    <div className="catalog__films-list">
      {
        filmsData.map((film) => <FilmCard filmData={film} key={film.id} onMouseEnter={() => handleFilmCardMouseEnter(film.id)}/>)
      }
    </div>
  );
}

export default FilmsList;
