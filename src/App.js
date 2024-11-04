import "./App.css";
import Main from "./Components/Main/Main";
import NavBar from "./Components/NavBar/NavBar";
import Search from "./Components/SearchPage/Search";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Confirmation from "./Components/Confirmation/Confirmation";
import { Routes, Route } from "react-router-dom";
import { fetchFoodItem } from "./apiCalls";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addItemToCart(item) {
    setCart((prevCart) => {
      return [...prevCart, item];
    });
  }

  function removeItemFromCart(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/search"
          element={
            <Search
              fetchFoodItem={fetchFoodItem}
              addItemToCart={addItemToCart}
              removeItemFromCart={removeItemFromCart}
              cart={cart}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeItemFromCart={removeItemFromCart} />}
        />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route
          path="/confirmation"
          element={<Confirmation cart={cart} setCart={setCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
