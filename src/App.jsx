import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Estadisticas from './assets/Componentes/Estadisticas';
import Home from './Pages/Home';
import DetallePersona from './assets/Componentes/DetallePersona';
import Contacto from './assets/Componentes/Contacto';
import Navbar from './assets/Componentes/Navbar';
import Error from './assets/Componentes/Error'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/persona/:id" element={<DetallePersona />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
    </BrowserRouter>
  );
}
export default App;