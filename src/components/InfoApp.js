import React, { Component } from 'react';

import Pagination from './Pagination';
import List from './List';
import  Input from './Input';

export default class InfoApp extends Component {

  state={
    countries:[],
    countriesMod:[],
    filter:"",
    pages:null
  }

    componentDidMount() {
      fetch('https://restcountries.eu/rest/v2/')
        .then(response => response.json())
        .then(response => {
          this.setState(() => ({ countries:response}),
            ()=>this.calcPart())
        })  
    }

    componentDidUpdate(prevProps,prevState){
      prevProps.match.params.page !== this.props.match.params.page&&this.calcPart() 
    }

     filterArr = (arr) => {
       const filters = this.state.filter
       return arr.filter((value, index) => value.name.toLowerCase().includes(filters.toLowerCase()))
     }

    onInputHandler = (event) =>{
      const text=event.target.value
      this.setState(() => ({filter:text}),() => this.calcPart(1))
    }

    calcPart(start = this.props.match.params.page) {
      const arr=this.filterArr(this.state.countries)
      const pages=Math.ceil(arr.length/5)
      const startNum = (start * 5) - 5
      const arr2 = arr.slice(startNum, startNum + 5)
      
      this.setState((prevState) => ({
        countriesMod: arr2,
        pages
      }))
      start === 1&&this.props.history.push('/list/1')
    }

    render() {
      return (
        <div>
          <List page={this.props.match.params.page} data={this.state.countriesMod} />
          <Input change={this.onInputHandler}/>
          <Pagination pages={ this.state.pages } />
        </div>
      )
    }
}
