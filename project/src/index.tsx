import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const promoFilmData = {
  filmName: 'The Grand Budapest Hotel',
  genre: 'Comedy',
  released: 2017,
};

root.render(
  <React.StrictMode>
    <App promoFilmData={promoFilmData}/>
  </React.StrictMode>,
);
