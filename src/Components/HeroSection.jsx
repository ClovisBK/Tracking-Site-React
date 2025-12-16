import React from 'react'

const HeroSection = (props) => {
  return (
    <div style={{textAlign: "center"}}>
      <h1 style={{color: "#47281D", fontSize: "1.5rem", fontWeight: "500"}}>{props.title}</h1>
      <p style={{color: "grey", fontWeight: "300"}}>{props.sub_title}</p>
    </div>
  )
}

export default HeroSection
