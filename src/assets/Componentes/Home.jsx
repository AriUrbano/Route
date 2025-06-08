import { useState, useEffect } from 'react';
import PersonaCard from './Persona';
import Informacion from '../../people.json';
import './Home.css';

const Home = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    setPersonas(Informacion);
  }, []);

  return (
    <div className="home-container">
      <h1>Directorio de Personas</h1>
      <div className="personas-grid">
        {personas.map((persona) => (
          <PersonaCard key={persona.id} persona={persona} />
        ))}
      </div>
    </div>
  );
};

export default Home;