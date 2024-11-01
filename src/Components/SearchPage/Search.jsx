import './Search.css'
import { useState, useEffect } from 'react'
import FoodCard from '../FoodCard/FoodCard'

export default function Search({fetchFoodItem, addItemToCart}) {
    const [searchedFoods, setSearchedFoods] = useState([])
    const [placeholder, setPlaceholder] = useState('Enter a Food')
    const [form, setForm] = useState({
        foodItem: ''
    })

    const {foodItem} = form

    useEffect(() => {
        console.log(searchedFoods, 'searched')
    }, [searchedFoods]);

    function handleChange(e) {
        setForm((prevData) => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        }
       )
       setSearchedFoods([])
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!form.foodItem) { 
            return alert('You must fill out the form');
        } else {
            try {
                const data = await fetchFoodItem(foodItem);
                setSearchedFoods(data.hints);  
                
            } catch (error) {
                console.error('Error fetching food item:', error);
            }
        }
        console.log(searchedFoods, 'foods');
        resetForm()
        setPlaceholder('Enter a Food')
    }

    function resetForm() {
        setForm({
            foodItem: ''
        })
    }

    function handleFocus() {
        setPlaceholder('')
    }

    const foodsToDisplay = searchedFoods.map((food, index) => {
        return (
            <FoodCard
            key={`${food.food.foodId}-${index}`} 
            id={food.food.foodId}
            name={food.food.label}
            img={food.food.image}
            addItemToCart={addItemToCart}
            />
        )
    })

    return (
        <div className='search-page'>
            <h1>Search For Your Favorite Groceries</h1>
            <form className='add-food-form'>
         <input className='food-input'
         type="text"
         placeholder={placeholder}
         name="foodItem"
         value={foodItem}
         onChange={handleChange}
         onFocus={handleFocus}
         />
         </form>
         <button className='submit-button' onClick={handleSubmit}>Search</button>
         <div className='foods-display'>
            {foodsToDisplay}
         </div>
        </div>
    )
}