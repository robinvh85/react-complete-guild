import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>I'm {props.name} and I'm {props.age} year's old</p>
      {props.children && <p>- {props.children}</p>}
    </div>
  )
}

export default person
