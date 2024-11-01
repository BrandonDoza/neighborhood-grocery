import './Cart.css'
import FoodCard from '../FoodCard/FoodCard'

export default function Cart({cart, removeItemFromCart}) {

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
        )
    })
    return (
        <div className='cart-display'>
 <h1>Your Cart</h1>
 {itemsInCartToDisplay}
 <p>{`You have ${cart.length} item(s) in your cart`}</p>
        </div>
       
    )
}