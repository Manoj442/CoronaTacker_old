import React, {Component} from 'react';
import {FormControl, Select, Typography, MenuItem} from '@material-ui/core';
import {fetchCountries} from './../API/index';
import styles from './../Countries/Countries.module.css';
//import {axios} from 'axios';
class Country extends Component{  
constructor(){
    super();
    this.state={
        countries:[]
    }
}
 async componentDidMount(){
  const countries= await fetchCountries();
  console.log(countries);
  this.setState({countries})
 }
    render(){
        return(
            <FormControl className={styles.countryDropdown}>
                <Typography variant="h6" component="h2">
                Select a Country:
                </Typography>
                <Select onChange={(e)=>this.props.changeCountry(e.target.value)}>
                    <MenuItem value="">Global</MenuItem>
                    {this.state.countries.map((country,index)=>{
                        return <MenuItem key={index} value={country}>{country}</MenuItem>
                    })}
                </Select>
            </FormControl>)
}
}
export default Country;