import React from 'react'
import Chartbar from "./ChartBar"
import './Chart.css'
function Chart(props) {

  const valueArray = props.dataPoints.map(dataPoint => dataPoint.value)
  const totalMaximun = Math.max(...valueArray);
  return (
    <div className='chart'>

      {props.dataPoints.map((dataPoint) => (

        <Chartbar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        />
      )
      )}
    </div>
  )
}

export default Chart