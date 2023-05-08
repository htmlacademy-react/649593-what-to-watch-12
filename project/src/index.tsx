import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const promoFilmData = {
  filmName: 'The Grand Budapest Hotel',
  genre: 'Comedy',
  released: 2017,
  backgroundImage: 'https://12.react.pages.academy/static/film/background/What-We-Do-in-the-Shadows.jpg',
  posterImage: 'https://12.react.pages.academy/static/film/poster/What-We-Do-in-the-Shadows.jpg',
};

root.render(
  <React.StrictMode>
    <App promoFilmData={promoFilmData} filmsData={films}/>
  </React.StrictMode>,
);
