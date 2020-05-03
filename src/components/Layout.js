import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import CurrentTemp from './CurrentTemp'
import NextDays from './NextDays'
import NextHour from './NextHour';
import NearbyTemp from './NearbyTemp';

export class Layout extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
               
                <Grid container md={12} xs={12} lg={12} spacing={2}>
                    <Grid item container md={4} lg={4} xs={12}>
                        <NearbyTemp  nearby={this.props.dataSet.upcoming} currDate={this.props.dataSet.report} />
                    </Grid>
                    <Grid item container md={4} lg={4} xs={12}>
                        <CurrentTemp report={this.props.dataSet.report}/>
                        <NextHour forecast={this.props.dataSet.forecast}/>
                    </Grid>
                    <Grid item container md={4} lg={4} xs={12}>
                        <NextDays nextday={this.props.dataSet.report}/>
                    </Grid>
                    
                </Grid>    
                
                    
                
            </div>
        )
    }
}

export default Layout
