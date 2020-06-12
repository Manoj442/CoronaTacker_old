import React, {Component} from 'react';
import {Grid,Typography,Card,CardContent} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './../Cards/cards.module.css'
//import Typography from '@material-ui/core/Typography';
class RegionalCards extends Component{
  // constructor(props){
  //   super(props);
  //  //console.log(props);
  // }
    render(){
      const data=this.props.regionalData;  
      console.log(data[0]);
      console.log(Object.keys(data))
        return <React.Fragment>
          <Typography className={styles.titleDisplayer} variant="h3">
        COVID-19 DASHBOARD
      </Typography><br/>
         <Grid container spacing={4} justify="center"> 
         {Object.keys(data[0]).map((d,index)=>(         
      <Grid key={index} item component={Card} 
      className={d === 'totalInfected'? styles.active: 
      d=== 'deceased' ? styles.deaths:
      d === 'recovered'?styles.recovered:d === 'totalCases'? styles.confirmed : styles.dontShow}>
        <CardContent>
        <Typography variant="body1" align="center" className={styles.caseText}>
        {d === 'totalInfected' ? 'Active':d ==='deceased' ?'Deaths': d === 'recovered'?'Recovered':'Confirmed'} 
      </Typography> 
      <Typography variant="h5" align="center">
       <CountUp className={styles.caseNumber} start={0} 
       end={data[0][`${d}`]} duration = {3} separator=","/>
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
    }
}
export default RegionalCards;