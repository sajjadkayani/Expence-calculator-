import React, { useState } from 'react'
import './Expences.css'
import ExpenceItem from './ExpenceItem'
import ExpencesFilter from './newExpence/ExpencesFilter';
import ExpencesChart from './ExpencesChart';
function Expences(props) {

  const [filteredYear, setfilteredYear] = useState('');

  const filterchangehandeler = (selectedYear) => {
    setfilteredYear(selectedYear);
  }

  const filteredYearExp = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <div className='expenses'>
      <ExpencesFilter
        selected={filteredYear}
        onChangeFilter={filterchangehandeler}/>
      <ExpencesChart expences={filteredYearExp}/>
        

      {filteredYearExp.length === 0 ?  (  
        props.items.map((expense) => (
          
          <ExpenceItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          />
          ))
          ) : (
            filteredYearExp.map( (expense) => (
              <ExpenceItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
        ))
        )};
    </div>
  )
}


export default Expences