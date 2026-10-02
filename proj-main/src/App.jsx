import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Placeorder from './Pages/Placeorder'
import Order from './Pages/Order'
import Navbar from './Component/Navbar'
import Footor from './Component/Footor'
import Login from './Pages/Login'
import SearchBar from './Component/SearchBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Verify from './Pages/Verify'


const App = () => {

  return (
   
  <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
  <ToastContainer/>
  <Navbar />
  <SearchBar/>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/collection' element={<Collection/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/product/:productId' element={<Product/>} /> 
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/placeorder' element={<Placeorder/>}/>
    <Route path='/orders' element={<Order/>} /> 
    <Route path='/login' element={<Login/>} />
    <Route path='/verify' element={<Verify/>} />  
  </Routes>
  <Footor />

</div>

   
  )
}

export default App
