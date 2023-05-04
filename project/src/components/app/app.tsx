import { PromoFilmData } from '../../types/promo-film';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import Review from '../../pages/review/review';
import Player from '../../pages/player/player';

type AppProps = {
  promoFilmData : PromoFilmData;
}

function App({ promoFilmData }:AppProps): JSX.Element {
  return (
    <>
      <Main promoFilmData={promoFilmData}/>
      <Login />
      <MyList />
      <Film />
      <Review />
      <Player />
    </>
  );
}

export default App;
