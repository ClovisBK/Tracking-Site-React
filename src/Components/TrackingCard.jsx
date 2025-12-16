import React from 'react'
import './Styles/trackingCard.css'
const TrackingCard = (props) => {
  return (
    <div className='tracking-card'>
            <div className="image">
                <img src={props.image_url} alt="" />
            </div>

            <div className="caption">
                <h1>{props.heading}</h1>
                <div>{props.text}</div>

            </div>
    </div>
  )
}

export default TrackingCard
