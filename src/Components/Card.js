import React from 'react'
import './Card.css';
function Card() {
  const classes = 'card' + props.children
    return (
    <div className={classes}> { props.children}
            
    </div>
  ) 
}

export default Card