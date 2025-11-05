import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Styles/navbar.css'

const Navbar = () => {
 const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='navbar'>
        <div className='navbar-brand'>
            <Link to={'/'}>LiBook</Link>
        </div>
            <button className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
                {'\u2630'}
            </button>
        
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/books">Books</Link></li>
            <li><Link to="/loan">Borrow</Link></li>
            <li><Link to="/reserve">Reserve</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Sign up</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
