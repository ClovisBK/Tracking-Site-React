import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Styles/navbar.css'

const Header = () => {
 const [menuOpen, setMenuOpen] = useState(false);

 const handleLinkClick = () => {
    setMenuOpen(false);
 }
  return (
    <nav className='navbar'>
        <div className='navbar-brand'>
            <Link to={'/'} style={{
                backgroundColor: "#351c15",
                 borderRadius: ".5rem",
                  padding: "5px",
                  color: "white"
                  }}>GLOBAL<span style={{color: "#ffbe03"}}>TRACK</span></Link>
                  <p style={{color: "grey"}}>Powered by <br /><span style={{
                    color: "#ffbe03", 
                    fontWeight: "bolder", 
                    backgroundColor: "#351c15",
                     padding: "5px",
                     borderRadius: ".5rem"
                     }}>Ups</span> & Global Partners</p>
        </div>
            <button className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
                {'\u2630'}
            </button>
        
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
            <li><Link to="/track-package" onClick={handleLinkClick}>Track Package</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
            
        </ul>
    </nav>
  )
}

export default Header
