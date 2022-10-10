import React, { useEffect } from 'react'
import { lineData } from './ChartData'
import { Line, Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import { Chart as ChartJS, registerables } from 'chart.js';
// import { Chart } from 'react-chartjs-2'

const Chart = ({type}) => {

  ChartJS.register(...registerables);

  const optionsLine = {
    maintainAspectRatio: true,
    tension: 0.5,
    responsive: true,
    fill: false,
    pointBorderWidth: 0,
    pointHoverRadius: 10,
    pointHoverBorderWidth: 0,
    
    scales: {
        y: {
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: {
                // color: '#ffffff99',
                display: true,
                fontSize: 14,
                beginAtZero: true,
                stepSize: 25,
            },
            // grid: {
            //     // borderDash: [10, 10],
            //     // borderDashOffset: 0.1,
            //     // lineWidth: 3,
            //     // offset: true,
            //     // display: true,
            //     // color: '#ffffff10',
            //     // fontSize: '3px',
                
            // },
        },
        x: {
            ticks: {
                beginAtZero: true,
            },
            grid: {
                display: true,
            },
        },
    },
    plugins: {
      // title:{
      //   display: true,
      //   text: 'Total Sales',
      //   fontSize:20,
      //   position: "top"
      // },
        legend: {
            display: false,
        },
        title: {
            display: true,
        },
    },
}
  const optionsBars = {
    scales: {
        y: {
          stacked: true,
            ticks: {
                display: true,
                fontSize: 14,
                beginAtZero: true,
                stepSize: 25000,
                callback: function(stepSize, index, ticks) {
                  return (stepSize/1000) + 'k';
              }
            },
        },
        x: {
            ticks: {
                beginAtZero: true,
            },
            grid: {
                display: true,
            },
        },
    },
    plugins: {
      // title:{
      //   display: true,
      //   text: 'Total Sales',
      //   fontSize:20,
      //   position: "top"
      // },
        legend: {
            display: false,
        },
        title: {
            display: true,
        },
    },
}
  const lineChart1 = (
    (
      <Line
      // width={160}
      height={120}
        data={{
          labels: lineData[0].labels.map((mon) => mon),
          datasets: [{
            data: lineData[1].data1.map((e) => e),
            borderColor: 'blue',
            fill: false,
          }, {
            data: lineData[2].data2.map((data) => data),
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: false,
          },
          ],
        }} 
        options={optionsLine}
      />
    )
  );
  const lineChart2 = (
    (
      <Line
      width={800}
      height={300}
        data={{
          labels: ['January','February','March','April','May', "June",'July', 'August', 'September', 'October','November', 'December'],
          datasets: [{
            data: [4,16,13,26,36,47,23,50,60,35,47,80],
            borderColor: 'blue',
            backgroundColor: 'blue',
            fill: true,
          }, {
            data: [20,39,28,45,47,67,43,60,75,50,37,95],
            borderColor: 'lightblue',
            backgroundColor: 'lightblue',
            fill: true,
          },
          ],
        }} 
        options={optionsLine}
      />
    )
  );
  // 
  const barChart =(
      <Bar
        height={280}
      data={{
          labels:['Week1','Week2','Week3','Week4'],
          datasets: [
            {
              // label: 'People',
              barThickness: 25,
              backgroundColor: 'rgba(0, 0, 255, 0.5)',
              data: [125000,160000,190000,140000],
            },
          ],
      }}
      options={optionsBars}
      
      />
    );
  
  return (
    <div>
      { type == "line1" && lineChart1}
      { type == "line2" && lineChart2}
      { type == "bar" && barChart}
    </div>
  )
}

export default Chart;
