import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const [personas, setPersonas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/people.json')
      .then(response => response.json())
      .then(data => {
        setPersonas(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Cargando...</div>;

  return (
    <div className="page-container">
      <h1 className="page-title">DIRECTORIO DE PERSONAS</h1>
      
      <div className="content-container">
        <div className="personas-list">
          {personas.map(persona => (
            <div key={persona.id} className="persona-card">
              <div className="card-content">
                <h2>{persona.nombre}</h2>
                <p><strong>Edad:</strong> {persona.edad}</p>
                <Link to={`/persona/${persona.id}`} className="details-btn">
                  VER DETALLES
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;