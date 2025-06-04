import { useState } from 'react';
import './Contacto.css';

const Formulario = ({ onAgregarUsuario }) => {
 
  const [error, setError] = useState(false);

  const tomarValores = (e) => {
    e.preventDefault();
    
    const nombre = e.target.nombre.value;
    const apellido = e.target.apellido.value;
    const edad = e.target.edad.value;
    const email = e.target.email.value;

    if (!nombre || !apellido || !edad || !email) {
      setError(true);
      return;
    }

    setError(false);

    const nuevoUsuario = {
      nombre,
      apellido,
      edad,
      email
    };
    

    onAgregarUsuario(nuevoUsuario);

    e.target.reset();
  };

  return (
    <div>
      <h2>Crear mi Cita</h2>
      {error && <div className="error">Todos los campos son obligatorios</div>}
      <form onSubmit={tomarValores}>
        <label>Nombre</label>
        <input 
          type="text" 
          name="nombre" 
          className="u-full-width" 
          placeholder="Nombre" 
        />
        
        <label>Apellido</label>
        <input 
          type="text" 
          name="apellido" 
          className="u-full-width" 
          placeholder="Apellido" 
        />
        
        <label>Edad</label>
        <input 
          type="number" 
          name="edad" 
          className="u-full-width" 
        />
        
        <label>Email</label>
        <input 
          type="email" 
          name="Email" 
          className="u-full-width" 
        />
        <button 
          type="submit" 
          className="u-full-width button-primary"
        >
          Agregar Cita
        </button>
      </form>
    </div>
  );
};

export default Formulario;