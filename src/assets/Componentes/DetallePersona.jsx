import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Informacion from '../../people.json';
import './DetallePersona.css';

const DetallePersona = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [persona, setPersona] = useState(null);

  useEffect(() => {
    const foundPersona = Informacion.find(p => p.id === parseInt(id));
    if (!foundPersona) {
      navigate('/404', { replace: true });
      return;
    }
    setPersona(foundPersona);
  }, [id, navigate]);

  if (!persona) return null;

  const esMayorEdad = persona.edad >= 18;

  return (
    <div className="persona-detalle-container">
      <button onClick={() => navigate(-1)} className="btn-volver">
        Volver
      </button>
      <div className="persona-detalle-card">
        <h2>{persona.nombre} {persona.apellido}</h2>
        <p><strong>Edad:</strong> {persona.edad} años</p>
        <p><strong>Email:</strong> {persona.email}</p>
        <p className={esMayorEdad ? 'mayor-edad' : 'menor-edad'}>
          {esMayorEdad ? 'Mayor de edad' : 'Menor de edad'}
        </p>
      </div>
    </div>
  );
};

export default DetallePersona;