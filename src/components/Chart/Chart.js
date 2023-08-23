import React from "react"
import ChartBar from './ChartBar'
import './Chart.css'

function Chart (probs)
{
    const dataPointvalues = probs.dataPoints.map( dataPoint => dataPoint.value)
    const totalMaximum= Math.max(...dataPointvalues)
return <div className="chart">
    {
        probs.dataPoints.map((dataPoint) => (
            <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label} />
           ))
    }
</div>

}
export default Chart