import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>No encontramos lo que buscás 😕</p>
      <Link to="/" className="btn-home">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error;