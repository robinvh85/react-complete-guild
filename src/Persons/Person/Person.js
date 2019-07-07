import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import "./Person.css";
import withGreyBorder from '../../hoc/withGreyBorder';
import AuthContext from '../../context/auth-context';

const person = (props) => {
  const myInput = useRef(null)


  useEffect(() => {
    console.log(`[Person=${props.id}] useEffect`) 

    return (() => { 
      console.log(`[Person=${props.id}] call every time before, except the first time`)
    })

  }, [props.name])
  
  useEffect(() => {
    console.log(`[Person=${props.id}] useEffect ONLY ONE`)
    myInput.current.focus();
    return (() => { 
      console.log(`[Person=${props.id}] call unmount`)
    })
  }, [])

  console.log(`[Person=${props.id}] render`)
  return (
    <AuthContext.Consumer>
      {
        (context) => {
          return (
            <div>
              { context.authenticated ? <p>Logined !</p> : <p>Not loginned !</p> }
              <p>I'm {props.name} and I'm {props.age} year's old</p>
              {props.children && <p>- {props.children}</p>}
              <input 
                type="text" 
                value={props.name}
                onChange={props.changed}
                ref={myInput}
                />
              <button onClick={props.deleteItem}>Delete</button>
            </div>
          )
        }
      }
    </AuthContext.Consumer>
  )
}

person.propTypes = {
  id: PropTypes.number,
  age: PropTypes.number,
  name: PropTypes.string
}

// export default React.memo(person)
export default withGreyBorder(person)
