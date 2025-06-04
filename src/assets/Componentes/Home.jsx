import React from 'react';
import './Home.css';
import Usuario from './Usuario';

const Listado = ({usuarios}) => {
  return (
    <div>
      <h2>Administra tus citas</h2>
      {usuarios.map((cita, index) => (
        <Cita 
          key={index}
          index={index}
          nombre={usuarios.nombre}
          apellido={usuarios.apellido}
          edad={usuarios.edad}
          email={usuarios.email}
          mayor={usuarios.mayorEdad}
        />
      ))}
    </div>
  );
};

export default Listado;