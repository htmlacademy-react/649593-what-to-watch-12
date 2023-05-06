import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { FilmData } from '../../types/film';

type FilmCardProps = {
  filmData: FilmData;
  onMouseEnter?: (id: number) => void;
}

function FilmCard({ filmData, onMouseEnter } : FilmCardProps):JSX.Element {
  const { previewImage, name, id } = filmData;
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={()=> {
        onMouseEnter?.(id);
      }}
    >
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film.replace(':id', id.toString())}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
