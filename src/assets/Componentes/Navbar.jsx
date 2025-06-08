import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Directorio
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/home">Inicio</Link>
          </li>
          <li>
            <Link to="/estadisticas">Estadísticas</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;