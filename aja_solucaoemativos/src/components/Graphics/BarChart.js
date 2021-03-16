import React from 'react';
import {Line, defaults} from 'react-chartjs-2';
// import stocks from '../stocks.json';

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const BarChart = () => {
return <div>
    <Line
      data={{
          labels: ['Red','Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
              {
                label: '# votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderWidth: 3
              },
              {
                  label: 'Quantity',
                  data: [100, 104, 67, 508, 900, 50],
                  backgroundColor: 'orange',
                  borderColor: 'red'
              }
          ],
      }}
      height={400}
      width={600}
      options={{
          maintainAspectRatio: false,
          scales: {
              yAxes: [
                  {
                    ticks: {
                       beginAtZero: true, 
                    }, 
                  },
              ],
          },
          legend: {
              labels: {
                  fontSize: 20,
              },
          },
      }}
    />
    </div>
}

export default BarChart;