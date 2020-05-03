import React,{ useState} from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}
function NextDays(props) {
    const [datas, setdatas] = useState({});
       //nearby cities
    fetch(`http://api.openweathermap.org/data/2.5/find?lat=${props.nextday.coord.lat}&lon=${props.nextday.coord.lon}&APPID=80944371652425c54f7b37c7e1d49a13&units=metric` ).then(resp =>
    resp.json()).then(
        (data) => {
            console.log("inside nestday");
            console.log(data);
            setdatas({...data});
        }
    );
    let val;
    if(! isEmpty(datas)) {
        val=(
            datas.list.map(
                    (temp) => {
                        if(temp.name != props.nextday.name)
                        {
                            return (
                                <Grid  item lg={12} md={12} xs={12}>
                                    <Card>
                                        <CardContent style={{fontFamily:'Nunito',padding:8}}>
                                            <Typography align="center" variant="h6">
                                                {temp.name}
                                            </Typography>
                                            <Grid xs={12} md={12} lg={12}>
                                                <div className="adjust">
                                                    <div className="makeInline padAround">
                                                        <img className="styleNext" src={"/images/"+ temp.weather[0].icon +".png"}/>
                                                    </div>
                                                    <div className="makeInline padAround">
                                                        <div>
                                                            {Math.round(temp.main.temp)}&#176; 
                                                        </div>
                                                        <div>
                                                            {temp.weather[0].main}
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                
                                            </Grid>   
                                              
                                        </CardContent>
                                    </Card>
                                    
                                </Grid>
                            );
                        }
                    }
                )
            
        );
    }
    return (
        <Grid container spacing={1} item lg={12} md={12} xs={12}>
            {
                val    
            }

        </Grid>
            
    )
}

export default NextDays
