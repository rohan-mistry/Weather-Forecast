import React, { Component,useState } from 'react'
import { Grid,Card, Button,Container, CardContent, Typography, Avatar, Collapse, ListItem, ListItemText } from '@material-ui/core'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      fontFamily:'Nunito'
    },
  });
const CurrentTemp = (props) => {
   
    const [open, setOpen] = useState(false);

    const handleMore = () => {
        setOpen(!open);
    };
    const classes = useStyles();
    return (
       
            <Grid item  lg={12} xs={12} md={12} >
                <Card className={classes.root}>
                    
                    <CardContent >
                        <Typography className={classes.root} variant="h4" align="center">
                            {props.report.name},{props.report.sys.country}
                        </Typography>
                        <div className="makeCenter">
                            <img src={"/images/" + props.report.weather[0].icon +".png"} className="styleIcon"/>
                        </div>
                        <Grid  xs={12} md={12} lg={12} style={{textAlign:'center'}}>
                            
                            <div className="adjust">
                                <div className="makeInline">
                                    <div className="head">{ Math.round(props.report.main.temp) }&#176;</div>
                                </div>
                                <div className="makeInline">
                                    <div className="makeMiddle">
                                        <ArrowDropUpIcon/>{ Math.round(props.report.main.temp_min) }&#176;
                                    </div>
                                    <div className="makeMiddle">
                                        <ArrowDropDownIcon/>{ Math.round(props.report.main.temp_max) }&#176;
                                    </div>
                                </div>
                            </div>
                            
                        </Grid>
                       <Grid xs={12} lg={12} md={12} style={{textAlign:'center'}}>
                            <div class="styleInfo">
                                <div class="makeInline  padAround">
                                    RealFeel &#174;  {" " + Math.round(props.report.main.feels_like)}&#176; 
                                </div>
                                <div class="makeInline padAround">
                                    { props.report.weather[0].main}
                                </div>
                            </div>
                       </Grid>
                       <Grid xs={12} md={12} lg={12}>
                           <Typography align="center" style={{padding:20}}>
                               <Button className={classes.root}  variant="contained" color="primary" onClick={handleMore}>
                                    See More {open ?<ExpandLessIcon/> : <ExpandMoreIcon/> }
                                </Button>
                           </Typography>
                            
                            <Collapse in={open} timeout="auto" >
                                <ListItem >
                                    <ListItemText  primary={"Humidity:" +props.report.main.humidity+"%" }/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText  primary={"Pressure:" +props.report.main.pressure+" "+"hPa" }/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText  primary={"Wind Speed:" +props.report.wind.speed +" "+"m/sec" }/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText  primary={"Visibility:" +props.report.visibility+" "+"m" }/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText  primary={"Cloud Cover:" +props.report.clouds.all+"%" }/>
                                </ListItem> 
                               
                                
                            </Collapse>
                       </Grid>
                        
                    </CardContent>
                </Card>
            </Grid>
       
    )
}

export default CurrentTemp
