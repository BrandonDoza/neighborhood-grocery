import "./Cart.css";
import FoodCard from "../FoodCard/FoodCard";
import { Link } from "react-router-dom";

export default function Cart({ cart, removeItemFromCart }) {
  const itemsInCartToDisplay = cart.map((food) => {
    return (
      <FoodCard
        key={food.id}
        id={food.id}
        name={food.name}
        img={food.img}
        cart={cart}
        removeItemFromCart={removeItemFromCart}
      />
    );
  });
  return (
    <div className="cart-display">
      <h1>Your Cart</h1>
      <p>
        {!cart.length
          ? "Your Cart Is Empty"
          : `You have ${cart.length} item(s) in your cart`}
      </p>
      {itemsInCartToDisplay}
      {cart.length > 0 && (
        <div className="button-container">
          <Link to="/checkout">
            <button className="checkout-button">Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}
