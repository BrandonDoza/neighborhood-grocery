import './Checkout.css'

export default function Checkout({cart}) {
    const itemsInCart = cart.map((item) => {
        return (
            <div>
                <h1>{item.name}</h1>
            </div>
        )
    })
    return (
        <div>
                <h1>Checkout</h1>
                <h2>You have the following item(s) in your cart</h2>
                {itemsInCart}
                <p>{`For a total of ${cart.length} item(s)`}</p>
                <button>Purchase Items</button>
        </div>
        
    )
}