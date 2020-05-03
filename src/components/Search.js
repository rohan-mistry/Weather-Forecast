import React, { Component } from 'react'
import { Grid, Container,TextField, Button, Select, NativeSelect } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import CurrentTemp from './CurrentTemp';
import NextHour from './NextHour';
import Layout from './Layout';

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}
export class Search extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            SearchTerm:'',
            country:'',
            report:{},
            forecast:{},
            upcoming:{}
        }
    }
    
    handleChange1=(event) =>{
        this.setState({SearchTerm:event.target.value})
        
    }
    handleChange2 =(event)=>{
        this.setState({country:event.target.value})
    }
    handleSubmit=()=>{
        if(!this.state.country=='')
        {
            //current weather
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.SearchTerm},${this.state.country}&APPID=80944371652425c54f7b37c7e1d49a13&units=metric` ).then(response =>
                response.json()
            ).then(
                (data) => {
                   this.setState({report:{...data}});
                  
                }
            );
            //5 day forecast
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.SearchTerm},${this.state.country}&APPID=80944371652425c54f7b37c7e1d49a13&units=metric&cnt=3` ).then(resp =>
                resp.json()
            ).then(
                (data) => {
                  console.log(data);
                  this.setState({forecast:{...data}});
                  
                }
            );
            //nextdays 
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.SearchTerm},${this.state.country}&APPID=80944371652425c54f7b37c7e1d49a13&units=metric` ).then(resp =>
                resp.json()
            ).then(
                (data) => {
                  console.log(data);
                  this.setState({upcoming:{...data}});
                  
                }
            );
        }
        else {
            //current weather
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.SearchTerm}&APPID=80944371652425c54f7b37c7e1d49a13&units=metric` ).then(response =>
                response.json()
            ).then(
                (data) => {
                    this.setState({report:{...data}});
                   
                }
            );
            //5 day forecast
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.SearchTerm}&APPID=80944371652425c54f7b37c7e1d49a13&units=metric&cnt=3` ).then(resp =>
                resp.json()
            ).then(
                (data) => {
                    console.log(data);
                    this.setState({forecast:{...data}});
                   
                }
            );
            //nextdays 
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.SearchTerm}&APPID=80944371652425c54f7b37c7e1d49a13&units=metric` ).then(resp =>
                resp.json()
            ).then(
                (data) => {
                  console.log(data);
                  this.setState({upcoming:{...data}});
                  
                }
            );

        }
        
    } 
    render() {
        console.log(this.state.country);
        console.log(this.state.SearchTerm); 
        
        let current,next,layout;
        if ( (! isEmpty(this.state.report)) && (! isEmpty(this.state.forecast))  )
        {
            layout=(
                <Layout dataSet={this.state}/>
            )
            
            
        }
       
        return (
            <div>
                    <Grid lg={12} md={12} xs={12}>
                        <Container  maxWidth="md" style={{textAlign:'center',padding:15}} >
                            <form  noValidate autoComplete="off" >
                                <Grid container spacing={0} >
                                   
                                    <Grid item lg={6} xs={6} md={6}>
                                        <TextField placeholder="Enter Zipcode or City" type="search" onChange={this.handleChange1} id="standard-basic"  fullWidth 
                                        
                                            />
                                    </Grid>
                                    <Grid item lg={2} xs={2} md={2}>
                                        <Button onClick={this.handleSubmit}>
                                            <SearchIcon/>
                                        </Button>
                                    </Grid>
                                    <Grid item lg={4} xs={4} md={4}>
                                    <FormControl >
                                        
                                            <Select fullWidth  
                                            style={{marginTop:0}}
                                            native
                                                inputProps={{
                                                    name:'country',
                                                    id:'country-code'
                                                }}
                                            
                                                onChange={this.handleChange2}
                                                >
                                                <option value="">Country code</option> 
                                                <option value={"us"}>USA</option>
                                                <option value={"in"}>India</option>
                                                <option value={"au"}>Australia</option>
                                            </Select>
                                    </FormControl>
                                            
                                    
                                    </Grid>
                                </Grid>
                            
                            </form>
                        </Container>
                    </Grid>
                   
                    { layout }
                    
               
            </div>
        )
    }
}

export default Search
