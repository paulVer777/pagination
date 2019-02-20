import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

export default class Pagination extends Component {

  generateLinks = () => {
    const links = []
      for(let i=0; i<this.props.pages;i++){
        links[i]=<NavLink className='pagination__link' activeClassName='is-active' to={`/list/${i+1}`}>{i+1}</NavLink>
      }
      return links
  }

  render() {
    return (
      <div className='pagination-wrapper'>
        <div className='pagination'>
          {
            this.generateLinks()
          }
        </div>
        
      </div>
    )
  }
}