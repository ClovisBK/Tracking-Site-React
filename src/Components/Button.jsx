import React from 'react'
import './Styles/button.css'
const Button = (props) => {
  return (
    <div className='parent-button'>
        <button className=''>{props.name}</button>
    </div>
  )
}

export default Button
