import './App.css'
import Main from './Components/Main/Main'
import NavBar from './Components/NavBar/NavBar'
import Search from './Components/SearchPage/Search'
import Cart from './Components/Cart/Cart'
import { Routes, Route } from 'react-router-dom'
import { fetchFoodItem } from './apiCalls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/search' element={<Search fetchFoodItem={fetchFoodItem}/> } />
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
