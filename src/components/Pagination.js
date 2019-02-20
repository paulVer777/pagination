import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class Pagination extends Component {

  generateLinks = () => {
    const links = []
      for(let i=0; i<this.props.pages;i++){
        links[i]=<Link className="pagination__link" to={`/list/${i+1}`}>{i+1}</Link>
      }
      return links
  }

  render() {
    return (
      <div className="pagination">
        {
          this.generateLinks()
        }
      </div>
    )
  }
}