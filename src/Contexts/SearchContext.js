import React, { Component, createContext } from 'react'

export const SearchData = createContext();
export class SearchContext extends Component {
    constructor(props){
        super(props);
        this.state={
            SearchTerm:'',
            country:'',
            report:{},
            forecast:{}
        }
    }
    updateState = (dataName,value) =>{
        this.setState({[dataName]:value});
    }
    render() {
        return (
            <SearchData.Provider value={{...this.state,updateState:this.updateState}}>
                {this.props.children}
            </SearchData.Provider>
        )
    }
}


export default SearchContext
