import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Componentes/Home"

const App = () =>  {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/'></Route>
   </Routes>
   </BrowserRouter>
  </>
  )
}

export default App
