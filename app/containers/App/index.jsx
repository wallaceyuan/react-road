import React, { Component } from 'react';
import { MyComponent } from '../../components';

class App extends Component {
  render(){
    return(
      <div className="main-container">
          {this.props.children}
      </div>
    );
  }
}
export default App;
