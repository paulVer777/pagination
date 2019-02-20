import React, { Component } from 'react'

export default class List extends Component {

  render() {
    return (
      <div>
        <h1>List</h1>
          {

            this.props.data.length <1 ? <p>page not found </p>
            :
            this.props.data.map((value,index) => <div>{value.name}</div>)
          }
      </div>
    )
  }
}
