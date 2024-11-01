import './App.css'
import Main from './Components/Main/Main'
import NavBar from './Components/NavBar/NavBar'
import Search from './Components/SearchPage/Search'
import Cart from './Components/Cart/Cart'
import { Routes, Route } from 'react-router-dom'
import { fetchFoodItem } from './apiCalls'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])

  function addItemToCart(item) {
    setCart((prevCart) => {
      return [...prevCart, item]
    })
    console.log(cart, 'cart')
  }
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/search' element={<Search fetchFoodItem={fetchFoodItem} addItemToCart={addItemToCart}/> } />
      <Route path='/cart' element={<Cart cart={cart}/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
