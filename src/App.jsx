import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./assets/Componentes/Layout";
import Home from "./assets/Componentes/Home";
import PersonaDetalle from "./assets/Componentes/DetallePersona";
import Estadisticas from "./assets/Componentes/Estadisticas";
import Contacto from "./assets/Componentes/Contacto";
import Error from "./assets/Componentes/Error";
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="persona/:id" element={<PersonaDetalle />} />
          <Route path="estadisticas" element={<Estadisticas />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;