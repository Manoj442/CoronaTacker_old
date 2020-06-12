import React, { Component } from 'react';
import {Chart} from 'react-google-charts';
//import {fetchDailyData} from './../../API/index';
import PieChart from './GooglePieChart';
import styles from './../ChartComponents/googleCharts.module.css';
import {Paper} from '@material-ui/core';
class LineChart extends Component{    
    async componentDidMount(){
     //this.setState({data:await fetchDailyData()})
    }
    render(){
        //console.log(this.state.data);
        //const dataRetrieved=this.props.data;
        //const keys=Object.keys(data);
        console.log(this.props.data.regionData);
        const data = [];
        data.push(['region', 'Active','Deaths']);
        this.props.data.regionData.map(details => {
        const detailsArray = [];
        detailsArray.push(details.region);
        detailsArray.push(details.totalInfected);
        detailsArray.push(details.deceased);        
        data.push(detailsArray);
         });
        const lineChart= <Chart
        width={'500px'}
        height={'700px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: 'State-wise cases',
          chartArea: { width: '50%' },
          hAxis: {
            title: 'Active & Deaths',
            viewWindow: { min: 0, max: 3000 },
          },
          vAxis: {
            title: 'State',
          },
        }}
        rootProps={{ 'data-testid': '2' }}
      />
      return <div className={Object.keys(this.props.regionData).length? styles.pieChartDimension :
      styles.lineChartDimension}>
      {Object.keys(this.props.regionData).length? 
        <PieChart regionData={this.props.regionData} 
      region={this.props.region}/> : lineChart }
      </div>
    }
}
export default LineChart;