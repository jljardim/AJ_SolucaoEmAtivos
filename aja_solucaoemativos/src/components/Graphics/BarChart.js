import React from 'react';
import {Line, defaults} from 'react-chartjs-2';
// import stocks from '../stocks.json';

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const BarChart = () => {
return <div>
    <Line
      data={{
        // labels: ['Red','Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        labels: [ 22.39, 22.42, 22.36, 22.36, 22.47, 22.39, 22.4, 22.4,
          22.37,22.37,22.38,22.42,22.37,22.47,22.46,22.47,22.51,23.51],
       
          datasets: [
              {
                label: '# votes',
                  data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
                backgroundColor: ['rgba(255, 255, 255, 0.5)'],
                borderColor: 'red',
                
                    /*'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],*/
                borderWidth: 3
              },
             /* {
                  label: 'Quantity',
                  data: [22.39,
                    22.42,
                    22.36,
                    22.36,
                    22.47,
                    22.39,
                    22.4,
                    22.4,
                    22.37,
                    22.37,
                    22.38,
                    22.42,
                    22.37,
                    22.47,
                    22.46,
                    22.47,
                    22.51,
                    23.51],
                  backgroundColor: 'orange',
                  borderColor: 'red'
              }*/
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