import React, { Component } from 'react';

import Pagination from './Pagination';
import List from './List';

export default class InfoApp extends Component {

  state={
    countries:[],
    countriesMod:[],
    countriesFiltered:[],
    filter:""
  }

    componentDidMount() {
      fetch('https://restcountries.eu/rest/v2/')
        .then(response => response.json())
        .then(response => {
          this.setState(() => ({ countries:response}),
            ()=>{
              // this.setState(() => ({ countriesMod:this.calcPart()}))
              this.calcPart()
            })
        })  
    }

    componentDidUpdate(prevProps,prevState){
      prevProps.match.params.page !== this.props.match.params.page&&this.calcPart() 
    }

     filterArr = (arr) => {
       console.log('working')
       const filters = this.state.filter
       return arr.filter((value, index) => value.name.toLowerCase().includes(filters.toLowerCase()))
     }

    onInputHandler = (event) =>{
      const text=event.target.value
      this.setState(() => ({filter:text}),() => this.calcPart())
    }

    calcPart(){
      const startNum = (this.props.match.params.page * 5) - 5
      const arr = this.state.countries.slice(startNum, startNum + 5)
      this.setState((prevState) => ({countriesMod:this.filterArr(arr)}))
    }

    render() {
      return (
        <div>
          <List page={this.props.match.params.page} data={this.state.countriesMod} />
          <input onChange={this.onInputHandler} />
          <Pagination pages={ this.state.countries.length/5 } />
        </div>
      )
    }
}
