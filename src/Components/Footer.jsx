import React from 'react'
import Button from './Button'
import './Styles/footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='upper-div'>
            <h1>Ready to Ship with Us?</h1>
            <p>Experience the difference of professional global losgistics services</p>
            <div style={{display: "flex", justifyContent: "center"}}>
            <Button name="Get Started"/>
            <button style={{
                border: "1px solid white",
                padding: "1px 15px",
                marginLeft: "20px",
                color: "white",
                fontWeight: "bold",
                borderRadius: ".5rem"
            }}>Learn More</button>
            </div>
        </div>
        <div className="lower-div">
            <div className="global-container">
                <div className="global-partition">
                    <div className="company">GlOBAL<span>TRACK</span>Powered by Ups & Global Partners</div>
                    <p>Your trusted partner in global losgistics and transportation services. Delivering excellence in shipping solutions since 2020</p>
                </div>
                <div className="quick-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/track-package">Track Package</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                       
                    </ul>
                </div>
                <div className="our-services">
                    <h2>Our Services</h2>
                    <ul>
                        <li><Link>Air Freight</Link></li>
                        <li><Link>Sea Freight</Link></li>
                        <li><Link>Ground Transport</Link></li>
                        <li><Link>Warehousing</Link></li>
                    </ul>
                </div>
                <div className="contact-us">
                    <h2>Contact</h2>
                    <Link>globaltrackteam@gmail.com</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
