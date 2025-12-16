import React from 'react'

const HeroSection = (props) => {
  return (
    <div style={{alignItems: "center"}}>
      <h1 style={{color: "#47281D", fontSize: "1.3rem"}}>{props.title}</h1>
      <p style={{color: "grey"}}>{props.sub_title}</p>
    </div>
  )
}

export default HeroSection
