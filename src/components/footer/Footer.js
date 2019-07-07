import React from 'react';
import AuthContext from '../../context/auth-context';

class Footer extends React.Component {
  
  static contextType = AuthContext;

  render() {
    return (
      <div>
        <h2>Footer</h2>
        { this.context.authenticated ? <p>Loginned !</p> : <p>Not login !</p> }
      </div>
    )
  }
}

export default Footer;