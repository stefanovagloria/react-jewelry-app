import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home';
import ProductsList from './components/ProductsList';
import Gallery from './components/Gallery';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import Order from './components/Order';
import Contacts from './components/Contacts';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <BrowserRouter>
    <Navigation loggedIn={isLoggedIn}></Navigation>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<ProductsList/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/order' element={<Order/>} />
      <Route path='/contacts' element={<Contacts/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;
