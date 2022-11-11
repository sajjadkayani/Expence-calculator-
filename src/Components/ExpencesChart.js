import React from 'react'

import Chart from './chart/Chart'
function ExpencesChart(props) {
    const chartDataPoint = [
        {label: 'jan' , value:0},
        {label: 'feb' , value:0},
        {label: 'mar' , value:0},
        {label: 'april' , value:0},
        {label: 'may' , value:0},
        {label: 'june' , value:0},
        {label: 'july' , value:0},
        {label: 'aug' , value:0},
        {label: 'oct' , value:0},
        {label: 'nov' , value:0},
        {label: 'dec' , value:0},
    ];
    for(const expense of props.expences){
         const expenceMonth =  expense.date.getMonth()
         chartDataPoint[expenceMonth].value += expense.amount;
    }
  return (
    <div>
<Chart dataPoints={chartDataPoint}/> 
    </div>
  )
}

export default ExpencesChart