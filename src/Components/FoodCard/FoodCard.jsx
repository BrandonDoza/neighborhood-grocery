import './FoodCard.css'

export default function FoodCard({
    id,
    name,
    img,
    addItemToCart,
}) {

    function handleAddToCart() {
        const item = { id, name, img };
        addItemToCart(item);
    }

    return (
        <div className='food-card'>
            <div className='image'>
            <img src={img} alt={`picture of a ${name}`} />
            </div>
            <div className='food-name'>
            <h1>{name}</h1>
            <button className='add-button'onClick={handleAddToCart}>Add To Cart</button>
            </div>
        </div>
    )

}