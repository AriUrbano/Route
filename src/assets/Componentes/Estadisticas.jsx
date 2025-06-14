import { useState, useEffect } from 'react';
import '../../App.css';

const Estadisticas = () => {
  const [estadisticas, setEstadisticas] = useState({
    total: 0,
    mayores35: 0,
    promedio: 0,
    mayorEdad: [],
    menorEdad: []
  });

  useEffect(() => {
    fetch('/people.json')
      .then(response => response.json())
      .then(data => {
        const total = data.length;
        const mayores35 = data.filter(p => p.edad > 35).length;
        const edades = data.map(p => p.edad);
        const maxEdad = Math.max(...edades);
        const minEdad = Math.min(...edades);
        
        setEstadisticas({
          total,
          mayores35,
          promedio: (edades.reduce((a, b) => a + b, 0) / total).toFixed(2),
          mayorEdad: data.filter(p => p.edad === maxEdad),
          menorEdad: data.filter(p => p.edad === minEdad)
        });
      });
  }, []);


  return (
    <div className="page-container">
      <h1 className="page-title">ESTADÍSTICAS</h1>
      
      <div className="content-container">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total de Personas</h3>
            <p>{estadisticas.total}</p>
          </div>
          <div className="stat-card">
            <h3>Mayores de 35 años</h3>
            <p>{estadisticas.mayores35}</p>
          </div>
          <div className="stat-card">
            <h3>Promedio de Edad</h3>
            <p>{estadisticas.promedio} años</p>
          </div>
        </div>

        <div className="extremos-container">
          <div className="extremo-card">
            <h3>Persona(s) de mayor edad ({estadisticas.mayorEdad[0]?.edad} años)</h3>
            <ul>
              {estadisticas.mayorEdad.map(p => (
                <li key={p.id}>{p.nombre} {p.apellido}</li>
              ))}
            </ul>
          </div>
          <div className="extremo-card">
            <h3>Persona(s) de menor edad ({estadisticas.menorEdad[0]?.edad} años)</h3>
            <ul>
              {estadisticas.menorEdad.map(p => (
                <li key={p.id}>{p.nombre} {p.apellido}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;