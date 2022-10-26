import React, { useEffect } from 'react';
import {Line} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);


interface IHomeGraph {
  title: string,
  data: {
    labels: string[],
    datasets: any,
  },
}

function HomeGraph(props: IHomeGraph) {

  useEffect(()=> {
    props.data.datasets = props.data.datasets.map((dataset: any) => {
      dataset.tension = 0.3;
      dataset.borderColor = dataset.label == "last 7 days" ? "#5753C1" :  "#333333";
      return dataset
    })
  }, [props])



  return (
    <div className='h-[100%] w-[100%] shadow-lg ml-4 bg-thwhite rounded-xl p-4'>
      <div className='flex items-center justify-between'>
        <h2 className='font-bold'>Revenue</h2>
        <h3 className='text-xs font-semibold'>{props.title}</h3>
      </div>
      <Line className='box-border' data={props.data} options={{
        scales: {
          x: {
            grid: {
              display: false,
            }
          },
          y: {
            grid: {
              drawBorder: false,
            },
            ticks: {
              callback: function(tickValue: string|number, index:number, ticks) {
                if (typeof tickValue == 'string') {
                  return Number(tickValue.toString()) / 1000 + "k"
                } else {
                  return tickValue / 1000 + "k";
                }
              }
            },
            beginAtZero: true
          }
        }
      }}></Line>
    </div>
  );
}

export default HomeGraph;
