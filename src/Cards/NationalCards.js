import React, {Component} from 'react';
import {Grid,Typography,Card,CardContent} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './../Cards/cards.module.css'
import RegionalCards from './RegionalCards';
//import Typography from '@material-ui/core/Typography';
class NationalCards extends Component{
  // constructor(props){
  //   super(props);
  //  //console.log(props);
  // }
    render(){
      const data=this.props.data;  
      const regionalData=this.props.regionData;
      console.log(regionalData);
      console.log(data);
      console.log(Object.keys(data));
      const nationalData = Object.keys(regionalData).length ? <RegionalCards regionalData={regionalData}/>:  
      <React.Fragment><Typography className={styles.titleDisplayer} variant="h3">
        COVID-19 DASHBOARD
      </Typography><br/>
         <Grid container spacing={4} justify="center"> 
         {Object.keys(data).map((d,index)=>(         
      <Grid key={index} item component={Card} 
      className={d === 'activeCases'? styles.active: 
      d=== 'deaths' ? styles.deaths:
      d === 'recovered'?styles.recovered: d==='totalCases'? styles.confirmed:styles.dontShow}>
        <CardContent>
        <Typography variant="body1" align="center" className={styles.caseText}>
        {d === 'activeCases' ? 'Active':d ==='deaths' ?'Deaths': d === 'recovered'?'Recovered':'Confirmed'} 
      </Typography> 
      <Typography variant="h5" align="center">
       <CountUp className={styles.caseNumber} start={0} 
       end={data[`${d}`]} duration = {3} separator=","/>
        </Typography>          
      {/* <Typography variant="subtitle1" align="center">
        Last update : {new Date(data.lastUpdatedAtApify).toLocaleString()}
      </Typography>       */}
        </CardContent>      
      </Grid>))}
  </Grid><br/>
  <Typography variant="h6" align="center">
        Last update : {new Date().toLocaleString()}
      </Typography>
      </React.Fragment>
        return <div>
               {nationalData}   
        </div>
    }
}
export default NationalCards;