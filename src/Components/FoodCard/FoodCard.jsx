import './FoodCard.css'

export default function FoodCard({
    name,
    img,
}) {
    return (
        <div className='food-card'>
            <div className='image'>
            <img src={img} alt={`picture of a ${name}`} />
            </div>
            <div className='food-name'>
            <h1>{name}</h1>
            <button className='add-button'>Add To Cart</button>
            </div>
        </div>
    )

}