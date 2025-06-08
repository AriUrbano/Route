import { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    edad: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.nombre.trim()) newErrors.nombre = 'Nombre es requerido';
    if (!formData.apellido.trim()) newErrors.apellido = 'Apellido es requerido';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email no válido';
    }

    if (!formData.edad) {
      newErrors.edad = 'Edad es requerida';
    } else if (isNaN(formData.edad) || formData.edad <= 0) {
      newErrors.edad = 'Edad debe ser un número positivo';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Aquí iría la lógica para enviar los datos
      console.log('Formulario enviado:', formData);
      setIsSubmitted(true);
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        edad: '',
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="contacto-container">
      <h1>Contacto</h1>
      {isSubmitted && (
        <div className="success-message">
          ¡Formulario enviado con éxito!
        </div>
      )}
      <form onSubmit={handleSubmit} className="contacto-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={errors.nombre ? 'error' : ''}
          />
          {errors.nombre && <span className="error-message">{errors.nombre}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            className={errors.apellido ? 'error' : ''}
          />
          {errors.apellido && <span className="error-message">{errors.apellido}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="edad">Edad</label>
          <input
            type="number"
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            className={errors.edad ? 'error' : ''}
          />
          {errors.edad && <span className="error-message">{errors.edad}</span>}
        </div>
        <button type="submit" className="btn-enviar">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;