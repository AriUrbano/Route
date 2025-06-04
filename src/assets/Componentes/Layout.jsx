import "./Layout.css" 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./assets/Componentes/Home"
import React, { useState } from 'react';
import Contacto from './assets/Componentes/Contacto';
function Layout() 
{
    return(
        <>
        <BrowserRouter>
        <Routes>
         <Route path='/' element={<Layout/>}></Route>
         <Route path='/Home' element= {<Home/>}></Route>
         <Route path='/persona/:id' element = {<DetallePersona/>}></Route>
         <Route path='/estadistica' element = {<Estadisticas/>}> </Route>
         <Route path='/contacto' element = {<Contacto/>}> </Route>
         </Routes>
        </BrowserRouter>
       </>
    );
}
export default Layout;