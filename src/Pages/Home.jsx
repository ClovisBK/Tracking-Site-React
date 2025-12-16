import React from 'react'
import Button from '../Components/Button'
import background_image from "../assets/logistics.jpg"
import '../Components/Styles/home.css'
import TrackingCard from '../Components/TrackingCard'
const Home = () => {
  return (
    <div>
      <div className="image-section" style={{
        backgroundImage: `url(${background_image})`,
         backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "60px 40px"
    }}>
        <h1 style={{
            textAlign: "center",
            fontWeight: "100",
            fontSize: "2.3rem",
            color: "white"
        }}>Global Shipping & <br /><span
            style={{
                color: "#ffbe03"
            }}
            >Logistics Solutions</span></h1>
        <p style={{fontWeight: "100", textAlign: "center"}}>Comprehensive shipping and logistics services. We handle everything from small packages to large freight, ensuring efficient delivery worldwide.</p>
        <div style={{justifyContent:"center", display: "flex", margin: "0 10px"}}>
            <Button name="TrackPage"/>
            <Button name="Get a Qoute" />
        </div>
      </div>
      <div style={{
        backgroundColor: "#47281D",
         color: "white",
          textAlign: "center",
          padding: "10px"
          }}>
          Special Offer: 20% off international shipping! Fast & Reliable Worldwide Delivery | Track your package in real-time | 24/7 Customer Support
      </div>
      <div className='informatics' style={{
        backgroundColor: "#411a0cff",
        display: "flex",
        justifyContent: 'center'
      }}>
        <div> 150+ <br /> Countries Served</div>
        <div>19+ <br /> Years Experience</div>
        <div>1M+ <br /> Packages Delivered</div>
        <div>98% <br /> Customer Satisfaction</div>
      </div>
      <div className='information'>
         <TrackingCard
          image_url = {background_image}
          heading = "GLOBAL NETWORK"
          text = "With over 19 years of experience, we connect businesses and individuals across +150 countries with reliable shipping solutions"
          
         />
         <TrackingCard
          image_url = {background_image}
          heading = "GLOBAL NETWORK"
          text = "With over 19 years of experience, we connect businesses and individuals across +150 countries with reliable shipping solutions"
          
         />
         <TrackingCard
          image_url = {background_image}
          heading = "GLOBAL NETWORK"
          text = "With over 19 years of experience, we connect businesses and individuals across +150 countries with reliable shipping solutions"
          
         />
         <TrackingCard
          image_url = {background_image}
          heading = "GLOBAL NETWORK"
          text = "With over 19 years of experience, we connect businesses and individuals across +150 countries with reliable shipping solutions"
          
         />
      </div>
    </div>
  )
}

export default Home
