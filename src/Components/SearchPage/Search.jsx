import './Search.css'
import { useState, useEffect } from 'react'
import FoodCard from '../FoodCard/FoodCard'

export default function Search({fetchFoodItem}) {
    const [searchedFoods, setSearchedFoods] = useState([])
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
    }

    function resetForm() {
        setForm({
            foodItem: ''
        })
    }

    const foodsToDisplay = searchedFoods.map((food) => {
        return (
            <FoodCard
            id={food.food.foodId}
            name={food.food.label}
            img={food.food.image}
            />
        )
    })

    return (
        <div className='search-page'>
            <h1>This is the search area</h1>
            <form className='add-food-form'>
         <input className='food-input'
         type="text"
         placeholder='Enter an Ingredient'
         name="foodItem"
         value={foodItem}
         onChange={handleChange}
         />
         </form>
         <button className='submit-button' onClick={handleSubmit}>Submit</button>
         <div className='foods-display'>
            {foodsToDisplay}
         </div>
        </div>
    )
}