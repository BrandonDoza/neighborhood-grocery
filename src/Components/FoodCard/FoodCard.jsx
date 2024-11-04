import "./FoodCard.css";

export default function FoodCard({
  id,
  name,
  img,
  addItemToCart,
  removeItemFromCart,
  cart = [],
}) {
  const isInCart = cart.some((item) => item.id === id);

  function handleClick() {
    if (isInCart) {
      removeItemFromCart(id);
    } else {
      addItemToCart({ id, name, img });
    }
  }

  return (
    <div className="food-card">
      <div className="image">
        <img src={img} alt={`picture of a ${name}`} />
      </div>
      <div className="food-name">
        <h1>{name}</h1>
        <button className="add-button" onClick={handleClick}>
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
