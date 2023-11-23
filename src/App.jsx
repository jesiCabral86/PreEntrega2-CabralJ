import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { NavBar, CartWidget, ContainerBox, ItemListContainer, ItemDetailContainer } from './components';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
    <h1 className="d-flex justify-content-center">Tienda CUTE</h1>
    <NavBar />
    <Routes>
    <CartWidget />
    <ContainerBox greeting={ "Bienvenidos a mi tienda "} />
    <Route path='/' element={<ItemListContainer/>} />
    <Route path='/category/:category'  element={<ItemListContainer/>} />
    <Route path='/item/:id' element={<ItemDetailContainer/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;