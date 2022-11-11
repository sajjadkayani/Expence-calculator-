import React from 'react'
import './Expencefilter.css'

function ExpencesFilter(props) {
    const dropDownChangeHandler =(e)=>{
        props.onChangeFilter(e.target.value)
      };
      
     
  return (
    <div className='dropdown'>
        <div className='allignment'> 
            <label> filter by year </label>
         <select value={props.selected}  onChange={dropDownChangeHandler}>
            <option value='2022' >2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
         </select>
         </div>
    </div>
  )
}

export default ExpencesFilter