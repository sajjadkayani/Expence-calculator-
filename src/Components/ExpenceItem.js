import React, { useState }  from 'react'
import ExpenceDate from './ExpenceDate'
import './ExpenceItem.css'

function ExpenceItem(props) {


  return (
    <div className='expense-item'> 
      <ExpenceDate date={props.date} />
      <div className='expense-item__description' >
        <h1 >{props.title}</h1>
        <div className='expense-item__price'>{props.amount}$</div>
      </div>
      
      </div>
  )
}

export default ExpenceItem