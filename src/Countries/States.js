import React, {Component} from 'react';
import {FormControl, NativeSelect, Typography} from '@material-ui/core';
//import {fetchCountries} from './../API/index';
import styles from './../Countries/Countries.module.css';
//import {axios} from 'axios';
class Regions extends Component{  
constructor(props){
    super(props);
    this.state={
        regions:[]
    }
}
    render(){
        const data=this.props.data;
        const regionalData=data.regionData;
        //console.log(data);
        //console.log(regionalData);
        console.log(this.props.regionData)
        return(
            <FormControl className={styles.countryDropdown}>
                <Typography variant="h6" component="h2">
                Select a Region:
                </Typography>
                <NativeSelect onChange={(e)=>this.props.changeRegion(e.target.value)}>
                    <option value="">National</option>
                    {regionalData.map((data,index)=>{
                        return <option key={index} value={data.region}>{data.region}</option>
                    })}
                </NativeSelect>
            </FormControl>)
}
}
export default Regions;