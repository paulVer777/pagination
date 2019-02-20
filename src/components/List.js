import React from 'react';

import ListItem from './ListItem';

const List = (props) => (

  <ul className='list'>
          {
            props.data.length <1 ? <p>Page not found</p>
            :
            props.data.map((value,index) => <ListItem name={value.name}/>)
          }
      </ul>
)

export default List
      
   
  



