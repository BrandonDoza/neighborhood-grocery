import './Search.css'
import { useState } from 'react'

export default function Search({fetchFoodItem}) {
    const [searchedFoods, setSearchedFoods] = useState([])
    const [form, setForm] = useState({
        foodItem: ''
    })

    const {foodItem} = form

    function handleChange(e) {
        setForm((prevData) => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        }
       )
       console.log(form)
    }

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
         <button>Submit</button>
        </div>
    )
}