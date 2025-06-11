import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './DetallePersona.css';

const DetallePersona = () => {
  const { id } = useParams();
  const Navegacion = useNavigate();
  const [persona, setPersona] = useState(null);

  useEffect(() => {
    fetch('/people.json')
      .then(response => response.json())
      .then(data => {
        const encontrada = data.find(p => p.id === Number(id));
        setPersona(encontrada);
      });
  }, [id]);

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