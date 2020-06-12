import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {fetchDailyData} from './../API/index';
import styles from './../Charts/charts.module.css';
import PieChart from './GoogleCharts/GooglePieChart';
class Chart extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    async componentDidMount(){
     this.setState({data:await fetchDailyData()})
    }
    render(){
        console.log(this.state);
        const LineChart=this.state.data.length? <Line data={{labels:this.state.data.map(({date})=>date),
    datasets:[{data:this.state.data.map(({confirmed})=>confirmed),
        label:'Infected',
        backgroundColor:'blue',
        fill:true
    },
        {data:this.state.data.map(({deaths})=>deaths),
            label:'Dead',
            backgroundColor:'red',
            fill:true}]
    }}
        />:null;
        // const barChart= this.props.country?<Bar data={{
        //     labels:['Infected','Deaths','Recovered'],
        //     datasets:[{backgroundColor:['blue','red','green'],
        // data:[barData.confirmed.value,barData.deaths.value,barData.recovered.value]}]
        // }} options={{
        //     legend:{display:false},
        //     title:{display:true,text:`Current state in ${this.props.country}`}
        // }}/>:null;
        return <div className={styles.chartDimension}>
            {this.props.country? <PieChart data={this.props.data}/> : LineChart}
            </div>
    }
}
export default Chart;