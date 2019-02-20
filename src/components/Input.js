import React from 'react'

 const Input = (props) => {
  return (
    <div className='input-wrapper'>
      <input onChange={props.change} placeholder='Search'/>
    </div>
  )
}

export default Input