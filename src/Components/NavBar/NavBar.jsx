import './NavBar.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='navbar'>
         <NavLink to='/' className='title-element'>
         <div className='title-element'>
         <h1>Neighborhood Grocery</h1>
         </div>
         </NavLink>  
                <div className='nav-buttons'>
                    <NavLink to='/search' className='link'>
                    <p>Search Groceries</p>
                    </NavLink>
                <p>My Cart</p>
            </div>
        </div>
    )
}