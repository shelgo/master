import React, { Component } from 'react';
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';

class Check extends Component {
constructor() {
  super();

  this.state = { 
    checked: false 
    
  };
} 
handleChange =() => {
  this.setState({
    checked: !this.state.checked
  })
}

render() {
  const content = this.state.checked 
    ? <div> <input  type="text" name="abc"/> </div>
    : null;
  return <div>
    <div>
      <label>Check</label>
      <input type="submit" name="button"/>
      <input  type="checkbox"   checked={ this.state.checked } onChange={ this.handleChange } /> <br/>
      
    </div>

    { content }
  </div>;
}

}
export default Check;