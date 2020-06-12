import React, {Component} from 'react';
//import logo from './logo.svg';
//import styles from './App.css';
import {fetchNationalData} from './API/index';
import NationalCards from './Cards/NationalCards';
import Regions from './Countries/States';
import PieChart from './ChartComponents/GooglePieChart';
import ReactApexChart from './ChartComponents/ReactApexChart';
import ApexLineChart from './ChartComponents/ApexLineChart';
import LinearProgress from '@material-ui/core/LinearProgress';
//import axios from 'axios';
class App extends Component{
  constructor(){
    super();
    this.state={
      data:{},
      region:'',
      regionData:{},
      historicData:[],
      loading:true   
    }
    }
  async componentDidMount(){
    const data=await fetchNationalData();
    console.log(data);
    // const weeklyData=data[1].data.length? 
    // data[1].data.filter((hd,index)=> index % 7 === 0):null;
    // console.log(weeklyData);
    var sortedData=[];
    if(data[1].data.length){      
      sortedData=[...data[1].data].slice().sort();
      console.log(sortedData);
    }       
    this.setState({data:data[0].data,historicData:sortedData,loading:false});
  }

  handleRegionChange=(region)=>{
    if(region === "National"){
      this.setState({
        regionData:{}
      })
    }
    else{
      const prevData=this.state.data.regionData;
      const regionData = prevData.filter(r=>r.region === region);
      this.setState({
        regionData:regionData,
        region:region
      })
    }   
  }
  render(){
    console.log(this.state.regionData);
    console.log(this.state.historicData);    
    const card= this.state.data.activeCases ? <NationalCards 
    regionData={this.state.regionData} data={this.state.data}/>:null;
    const deceasedArray=this.state.data.hasOwnProperty('regionData') ? 
    this.state.data.regionData.map(({deceased})=>deceased):[];
    const recoveredArray=this.state.data.hasOwnProperty('regionData') ? 
    this.state.data.regionData.map(({recovered})=>recovered):[];
    const ActiveArray=this.state.data.hasOwnProperty('regionData') ? 
    this.state.data.regionData.map(({totalInfected})=>totalInfected):[];
    const confirmedArray=this.state.data.hasOwnProperty('regionData') ? 
    this.state.data.regionData.map(({totalCases})=>totalCases):[];
    const lineChartArray=this.state.data.hasOwnProperty('regionData') ?{
      Deaths:deceasedArray,
      Recovered:recoveredArray,
      Active:ActiveArray,
      Confirmed:confirmedArray
    }:{};
    console.log(Object.keys(lineChartArray));
    return(
      <div>
        {this.state.loading ? <div style={{margin:'3%'}}><br/>Loading Please wait...<br/><LinearProgress color="secondary" /></div> : null}        
        {card}<br/> 
        {/* <Statistics/><br/> */}
        {
          this.state.data.hasOwnProperty('regionData')? 
          <Regions data={this.state.data} changeRegion={this.handleRegionChange}/>
          :null
        }
        <br/>
        <br/>
        {Object.keys(this.state.regionData).length?         
        <PieChart regionData={this.state.regionData} 
      region={this.state.region}/> : null }        
        <br/>
        <br/>
        {          
          this.state.historicData.length && !Object.keys(this.state.regionData).length ? 
          <ReactApexChart chartData={this.state.historicData}/> : null
        }
        <br/>
        <br/>
        {
          this.state.data.hasOwnProperty('regionData') && !Object.keys(this.state.regionData).length?
          Object.keys(lineChartArray).map((d,index)=>
          <React.Fragment>
          <ApexLineChart key={index} 
          title={d}
          chartData={lineChartArray[`${d}`]} data={this.state.data}/><br/><br/>
          </React.Fragment>):null
            }                                          
      </div>      
    )
  }
}
export default App;
