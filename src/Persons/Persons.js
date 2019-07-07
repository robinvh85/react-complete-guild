import React, { useEffect, useContext } from 'react';

import Person from './Person/Person'
import withGreyBorder from '../hoc/withGreyBorder';
import AuthContext from '../context/auth-context';

const Persons = (props) => {

  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("[Persons] useEffect") 

    return (() => { 
      console.log("[Persons] call every time before, except the first time")
    })

  }, [props.name]);
  
  useEffect(() => {
    console.log("[Persons] useEffect ONLY ONE")

    return (() => { 
      console.log("[Persons] call unmount")
    })
  }, [])

  console.log('[Persons] - Render')
  return (
    <div>
      { !authContext.authenticated && <button onClick={authContext.login}>Login in persons</button>}
      { props.persons.map((person, index) => {
        return <Person 
          key={index}
          id={person.id}
          name={person.name} 
          age={person.age} 
          changed={(event) => props.changeNewHandler(event, index)}
          deleteItem={(event) => props.deleteHandler(index)}
        />
      }) }
    </div>
  )
}

export default withGreyBorder(Persons);
