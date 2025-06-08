import { Link } from 'react-router-dom';
import './Persona.css';

const PersonaCard = ({ persona }) => {
  return (
    <div className="persona-card">
      <div className="persona-info">
        <h3>{persona.nombre} {persona.apellido}</h3>
        <p>Edad: {persona.edad}</p>
      </div>
      <Link to={`/persona/${persona.id}`} className="btn-ver-mas">
        Ver más
      </Link>
    </div>
  );
};

export default PersonaCard;