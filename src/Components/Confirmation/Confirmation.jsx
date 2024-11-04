import "./Confirmation.css";
import { Link } from "react-router-dom";

export default function Confirmation({ cart, setCart }) {
  const itemsPurchased = cart.map((item) => {
    return (
      <div>
        <h1>- {item.name}</h1>
      </div>
    );
  });

  function handleClick() {
    setCart([]);
  }
  return (
    <div>
      <h1>Thank You For Your Purchase !</h1>
      <h2>You Have Purchased The Following Item(s):</h2>
      {itemsPurchased}
      <Link to="/">
        <button className="done-button" onClick={handleClick}>
          Done
        </button>
      </Link>
    </div>
  );
}
