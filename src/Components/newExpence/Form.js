import React, { useState } from 'react'
import './Form.css'
function Form(props) {
 
    

    const[Etitle , setEtitle]=useState('')
    const[EAmount , setAmount]=useState('')
    const[EDate , setDate]=useState('')
 
    const handletitlechange =(e)=>{
       setEtitle(e.target.value)
    }
    const handleamountchange =(e)=>{
       setAmount(e.target.value)
    }
    const handledatechange =(e)=>{
       setDate(e.target.value)
    }
    
    const submithandler=(e)=>{ 
        e.preventDefault();

        const ExpenceData ={
           title: Etitle,
           amount: EAmount,
           date: new Date(EDate)
       }
       props.onSaveData(ExpenceData );
       setAmount('')
       setDate('')
       setEtitle('')
     }

  return (
    <form onSubmit={submithandler}>
     <div className='new-expense__controls' >
     <div className='new-expense__control' >

     <label>Amount</label>
       <input value={EAmount} 
       onChange={handleamountchange} 
       type='number' min="0.01" step="0.01"/>
     </div>

     <div className='new-expense__control' >
     <label>title</label>
       <input 
       value={Etitle} 
       onChange={handletitlechange}   
        type='text'/>
     </div>

      <div className='new-expense__control' >
     <label>Date</label>
       <input 
       value={EDate} 
       onChange={handledatechange} 
       type='DATE' min="2019-01-01" max="2022-01-01"/>
     </div>
     <div className='new-expense__control' >
     <button type='Submit'> submit</button>
     </div>

     </div>
       
    </form>
  )
}

export default Form