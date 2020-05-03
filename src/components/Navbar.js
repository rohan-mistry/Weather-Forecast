import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar,Typography,Button } from '@material-ui/core'



export class Navbar extends Component {
   
    render() {
        
        return (
             
            <div>
                <AppBar position="static" >
                    <Toolbar>
                        <Typography variant="h6" style={{flexGrow:1}}>
                            Forecast On Point
                        </Typography>
                        <Button variant="contained" color="primary" href="#" style={{}} disableElevation>
                            Weather Map
                        </Button>
                    </Toolbar>
                </AppBar>
                
            </div>
        )
    }
}

export default Navbar
