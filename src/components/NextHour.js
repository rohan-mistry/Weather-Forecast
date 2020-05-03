import React from 'react'
import { Grid, Card, CardContent,Typography } from '@material-ui/core'

function NextHour(props) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        
            <Grid item container xs={12} md={12} lg={12} spacing={1} style={{marginTop:5}}>
               
                        {
                            props.forecast.list.map( (temps) => {
                                let currDate=new Date(temps.dt*1000);
                                let hours = currDate.getHours();
                                let minutes = currDate.getMinutes();
                                hours = hours % 12;
                                hours = hours ? hours : 12; // the hour '0' should be '12'
                                minutes = minutes < 10 ? '0'+minutes : minutes;
                                let strTime = hours + ':' + minutes ;
                                
                               return (
                                <Grid item md={4} lg={4} xs={4}>  
                                    <Card >
                                        <CardContent style={{padding:10}}>
                                            <Typography  variant="h6" align="center">
                                                {strTime}
                                            </Typography>
                                            <div className="makeCenter">
                                                <img src={"/images/" + temps.weather[0].icon +".png"} className="styleNext"/>
                                            </div>
                                            <div style={{textAlign:'center'}}>{ Math.round(temps.main.temp) }&#176; {" "+temps.weather[0].main} </div>
                                        </CardContent>
                                    </Card>
                                    
                                </Grid>
                               ); 
                            })
                            
                        }
            
            </Grid>
        
    )
}

export default NextHour
