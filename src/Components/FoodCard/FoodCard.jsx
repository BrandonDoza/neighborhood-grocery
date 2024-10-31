import './FoodCard.css'

export default function FoodCard({
    name,
    img,
}) {
    return (
        <div className='food-card'>
            <h1>{name}</h1>
            <img src={img} alt={`picture of a ${name}`} />
        </div>
    )

}