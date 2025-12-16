import React from 'react'
import Button from '../Components/Button'
import background_image from "../assets/logistics.jpg"

const Home = () => {
  return (
    <div>
      <div className="image-section" style={{
        backgroundImage: `url(${background_image})`,
         backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
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
    </div>
  )
}

export default Home
