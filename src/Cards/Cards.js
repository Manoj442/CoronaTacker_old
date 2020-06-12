import React, {Component} from 'react';
import {Grid,Typography,Card,CardContent} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './../Cards/cards.module.css'
//import Typography from '@material-ui/core/Typography';
class Cards extends Component{
  // constructor(props){
  //   super(props);
  //  //console.log(props);
  // }
    render(){
      const data=this.props.data;  
      console.log(data);
      console.log(Object.keys(data))
        return <div>
          <Typography className={styles.titleDisplayer} variant="h3">
        COVID-19 TRACKER
      </Typography><br/>
         <Grid container spacing={4} justify="center"> 
         {Object.keys(data).map((d,index)=>(         
      <Grid key={index} item component={Card} 
      className={d === 'confirmed'? styles.confirmed: 
      d=== 'deaths' ? styles.deaths:
      d === 'recovered'?styles.recovered: d==='active' ? styles.active :
      styles.dontShow}>
        <CardContent>
        <Typography variant="h5" align="center" className={styles.caseText}>
        {d === 'confirmed' ? 'Confirmed':d ==='deaths' ?'Deaths':'Recovered'} 
      </Typography> 
      <Typography variant="h6" align="center">
       <CountUp className={styles.caseNumber} start={0} 
       end={data[`${d}`]["value"]} duration = {3} separator=","/>
        </Typography>     
      <Typography variant="subtitle1" align="center">
        Last update : {new Date(data.lastUpdate).toLocaleString()}
      </Typography>      
        </CardContent>      
      </Grid>))}
  </Grid>           
        </div>
    }
}
export default Cards;