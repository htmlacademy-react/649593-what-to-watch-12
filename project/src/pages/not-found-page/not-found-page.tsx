import { Link } from 'react-router-dom';
import './not-found-page.css';

function NotFoundPage():JSX.Element {
  return (
    <section className='not-found-page'>
      <h1 className='not-found-page__title'>404 Not Found</h1>
      <Link className='not-found-page__link' to='/'>Back to the main page</Link>
    </section>
  );
}

export default NotFoundPage;
