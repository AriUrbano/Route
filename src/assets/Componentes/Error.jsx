import { Link } from 'react-router-dom';
import './Error.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>No encontrado</p>
      <Link to="/" className="btn-home">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;