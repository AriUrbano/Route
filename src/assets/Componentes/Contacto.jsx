import { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [Data, setFormularioData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    edad: '',
  });
  const [error, setError] = useState({});
  const [Mandar, setMandado] = useState(false);

  const ManejarCambios = (e) => {
    const { name, value } = e.target;
    setFormularioData({
      ...Data,
      [name]: value,
    });
  };

  const validate = () => {
    const ErroresNuevo = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!Data.nombre.trim()) ErroresNuevo.nombre = 'Nombre es requerido';
    if (!Data.apellido.trim()) ErroresNuevo.apellido = 'Apellido es requerido';
    
    if (!Data.email.trim()) {
      ErroresNuevo.email = 'Email es requerido';
    } else if (!emailRegex.test(Data.email)) {
      ErroresNuevo.email = 'Email no válido';
    }

    if (!Data.edad) {
      ErroresNuevo.edad = 'Edad es requerida';
    } else if (isNaN(Data.edad) || Data.edad <= 0) {
      ErroresNuevo.edad = 'Edad debe ser un número positivo';
    }

    setError(ErroresNuevo);
    return Object.keys(ErroresNuevo).length === 0;
  };

  const ManejarMandado = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Formulario enviado:', Data);
      setMandado(true);
      setFormularioData({
        nombre: '',
        apellido: '',
        email: '',
        edad: '',
      });
      setTimeout(() => setMandado(false), 3000);
    }
  };

  return (
    <div className="contacto-container">
      <h1>Contacto</h1>
      {Mandar && (
        <div className="success-message">
          ¡Formulario enviado con éxito!
        </div>
      )}
      <form onSubmit={ManejarMandado} className="contacto-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={Data.nombre}
            onChange={ManejarCambios}
            className={error.nombre ? 'error' : ''}
          />
          {error.nombre && <span className="error-message">{error.nombre}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={Data.apellido}
            onChange={ManejarCambios}
            className={error.apellido ? 'error' : ''}
          />
          {error.apellido && <span className="error-message">{error.apellido}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={Data.email}
            onChange={ManejarCambios}
            className={error.email ? 'error' : ''}
          />
          {error.email && <span className="error-message">{error.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="edad">Edad</label>
          <input
            type="number"
            id="edad"
            name="edad"
            value={Data.edad}
            onChange={ManejarCambios}
            className={error.edad ? 'error' : ''}
          />
          {error.edad && <span className="error-message">{error.edad}</span>}
        </div>
        <button type="submit" className="btn-enviar">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;