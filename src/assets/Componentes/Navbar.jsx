import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="sanlorenzo-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="logo-azul">DIRECTORIO</span>
          <span className="logo-rojo">DE PERSONAS</span>
        </Link>
        
        <div className="navbar-menu">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/estadisticas" className="nav-link">Estadísticas</Link>
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;