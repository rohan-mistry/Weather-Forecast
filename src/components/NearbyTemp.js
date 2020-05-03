import React from 'react'
import { Grid,Card, CardContent } from '@material-ui/core'

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}
function NearbyTemp(props) {
    let d=new Date(props.currDate.dt *1000);
    let present=d.getDate;
    const dayOfWeek=["SUN","MON","TUE","WED","THURS","FRI","SAT"];
    let detail ;
   
    if(! isEmpty(props.nearby))
    {
       
        detail=(
            props.nearby.list.map( (temp) => {
                        let d=new Date(props.currDate.dt *1000);
                        let present=d.getDate();
                        const dayOfWeek=["SUN","MON","TUE","WED","THURS","FRI","SAT"];
                        let f_d=new Date(temp.dt *1000);
                        let f_date=f_d.getDate();
                        let f_hour=f_d.getHours();
                        let f_min=f_d.getMinutes();
                        let f_day=dayOfWeek[f_d.getDay()];
                       
                       
                        if(f_date!=present && f_hour==11 && f_min==30 )
                        {   
                            
                            return (
                                <Grid item xs={6} md={6} lg={6}>
                                    <Card>
                                        <CardContent>
                                            <div className="adjust">
                                                <div className="makeInline padEasy">
                                                    <img className="weekdays" src={"/images/"+ temp.weather[0].icon + ".png"}/>
                                                </div>
                                                <div className="makeInline padEasy">
                                                    <div>
                                                        {Math.round(temp.main.temp_min)}
                                                    </div>
                                                    <div>
                                                        {Math.round(temp.main.temp_max)}
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="adjust">
                                                <div className="makeInline padEasy">
                                                    {f_day}
                                                </div>
                                                <div className="makeInline padEasy " >
                                                    {temp.weather[0].description}
                                                </div>
                                            </div>
                                            
                                        </CardContent>
                                    </Card>
                                    
                                    
                                    
                                </Grid>    
                            )
                        }
                    })
        );
    }
    return (
        
            <Grid container item xs={12} md={12} lg={12} spacing={1}>
               
                {
                   detail
                    
                }
            </Grid>
        
    )
}

export default NearbyTemp
