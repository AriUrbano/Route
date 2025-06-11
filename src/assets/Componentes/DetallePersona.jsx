import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './DetallePersona.css';
import Error from './Error'; 


const DetallePersona = () => {
  const { id } = useParams();
  const Navegacion = useNavigate();
  const [persona, setPersona] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    
    fetch('/people.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo cargar la información');
        }
        return response.json();
      })
      .then(data => {
        const encontrada = data.find(p => p.id === Number(id));
        if (!encontrada) {
          throw new Error('Persona no encontrada');
        }
        setPersona(encontrada);
      })
      .catch(err => {
        setError(err.message);
      })

  }, [id]);
  if (error) {
    return <Error />; 
  }

  if (!persona) {
    return <Error />; 
  }

  return (
    <div className="detalle-fullscreen">
      <div className="detalle-content">
        <h1 className="detalle-title">
          <span className="nombre-azul">{persona.nombre} </span>
          <span className="apellido-rojo">{persona.apellido}</span>
        </h1>
        
        <div className="detalle-info">
          <div className="info-item">
            <span className="info-label">EDAD:</span>
            <span className="info-value">{persona.edad} años</span>
          </div>
          <div className="info-item">
            <span className="info-label">EMAIL:</span>
            <span className="info-value">{persona.email}</span>
          </div>
        </div>
        
        <button 
          onClick={() => Navegacion(-1)} 
          className="volver-btn"
        >
          VOLVER AL LISTADO
        </button>
      </div>
    </div>
  );
};

export default DetallePersona;