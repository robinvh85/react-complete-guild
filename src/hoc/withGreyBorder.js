import React from 'react';

const withGreyBorder = (WrappedComponent) => {
  // return class extends React.Component {
  //   render(){
  //     return (
  //       <div style={{border: '1px grey solid', margin: '10px'}}>
  //         <WrappedComponent {...this.props}/>
  //       </div>
  //     )
  //   }
  // }

  return (props) => {
    return (
      <div style={{border: '1px grey solid', margin: '10px'}}>
        <WrappedComponent {...props}/>
      </div>
    )
  }
}

export default withGreyBorder;