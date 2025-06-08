import { useEffect, useState } from 'react';
import Informacion from '../../people.json';
import './Estadisticas.css';

const Estadisticas = () => {
  const [stats, setStats] = useState({
    total: 0,
    mayores35: 0,
    mayorEdad: [],
    menorEdad: [],
    promedio: 0,
  });

  useEffect(() => {
    if (Informacion.length === 0) return;

    const total = Informacion.length;
    const mayores35 = Informacion.filter(p => p.edad > 35).length;
    
    const edades = Informacion.map(p => p.edad);
    const maxEdad = Math.max(...edades);
    const minEdad = Math.min(...edades);
    
    const mayorEdad = Informacion.filter(p => p.edad === maxEdad);
    const menorEdad = Informacion.filter(p => p.edad === minEdad);
    
    const promedio = edades.reduce((a, b) => a + b, 0) / total;

    setStats({
      total,
      mayores35,
      mayorEdad,
      menorEdad,
      promedio: parseFloat(promedio.toFixed(2)),
    });
  }, []);

  return (
    <div className="estadisticas-container">
      <h1>Estadísticas</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total de personas</h3>
          <p>{stats.total}</p>
        </div>
        <div className="stat-card">
          <h3>Mayores de 35 años</h3>
          <p>{stats.mayores35}</p>
        </div>
        <div className="stat-card">
          <h3>Promedio de edad</h3>
          <p>{stats.promedio} años</p>
        </div>
      </div>

      <div className="personas-extremas">
        <div className="extrema-card">
          <h3>Persona(s) de mayor edad ({stats.mayorEdad[0]?.edad} años)</h3>
          <ul>
            {stats.mayorEdad.map(p => (
              <li key={p.id}>{p.nombre} {p.apellido}</li>
            ))}
          </ul>
        </div>
        <div className="extrema-card">
          <h3>Persona(s) de menor edad ({stats.menorEdad[0]?.edad} años)</h3>
          <ul>
            {stats.menorEdad.map(p => (
              <li key={p.id}>{p.nombre} {p.apellido}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;