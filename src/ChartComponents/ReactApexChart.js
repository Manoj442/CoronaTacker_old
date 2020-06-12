import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import styles from './googleCharts.module.css';
import {Paper} from '@material-ui/core';
class ReactApexChart extends Component{
    constructor(props){
        super(props);
        console.log(props.chartData);
        const activeSeries=props.chartData.map(({activeCases})=>activeCases);
        const recoveredSeries=props.chartData.map(({recovered})=>recovered);
        const confirmedSeries=props.chartData.map(({totalCases})=>totalCases);
        const deathSeries=props.chartData.map(({deaths})=>deaths);
        const categories=props.chartData.map(({lastUpdatedAtApify})=>lastUpdatedAtApify);
        this.state = {          
            series: [{
              name: 'Active',
              data: activeSeries
            }, {
              name: 'Recovered',
              data: recoveredSeries
            },
            {
                name: 'Confirmed',
                data: confirmedSeries
              },
              {
                name: 'Deaths',
                data: deathSeries
              },
        ],
            options: {
              chart: {
                height: '50%',
                width:'50%',
                type: 'line',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                  },
                  animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 800,
                    animateGradually: {
                        enabled: true,
                        delay: 150
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 350
                    }
                }
              },
              theme: {
                palette: 'palette1' 
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'              
              },
              title: {
                text: 'Daily Count'
              },
              xaxis: {
                type: 'datetime',
                categories: categories
              },             
              responsive: [
                {
                  breakpoint: 1000,
                  options: {
                    plotOptions: {
                      bar: {
                        horizontal: false
                      }
                    },
                    legend: {
                      position: "bottom"
                    }
                  }
                }
              ],
              tooltip: {
                x: {
                  format: 'dd/MM/yy HH:mm'
                },
              },
            },
          
          
          };
    }
    render(){
        return <div className={styles.apexLineChartDimension}>
            <Paper elevation={5}><Chart options={this.state.options} series={this.state.series} 
        type="line"/>
        </Paper>
        </div>
    }
}
export default ReactApexChart;