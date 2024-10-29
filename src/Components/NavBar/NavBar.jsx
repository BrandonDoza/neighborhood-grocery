import './NavBar.css'

export default function NavBar() {
    return (
        <div className='navbar'>
            <div className='title-element'>
                <h1>Neighborhood Grocery</h1>
                </div>
                <div className='nav-buttons'>
                <p>Search Groceries</p>
                <p>My Cart</p>
            </div>
        </div>
    )
}