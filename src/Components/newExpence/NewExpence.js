import React from 'react'
import Form from './Form' 
import './NewExpence.css'
function NewExpence(props) {
    const onSaveDatahandler =( enteredExpenceData )=>{
           const expenceData = {
              ...enteredExpenceData,
              id: Math.random().toString()
           }
           
    props.onAddExpence(expenceData);

        }

  return (
    <div className='new-expense'>
 
 <Form onSaveData={onSaveDatahandler}/>

    </div>
  )

}

export default NewExpence