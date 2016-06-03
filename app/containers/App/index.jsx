import React, { Component } from 'react';
import { MyComponent } from '../../components';

const App = ({children, history}) =>{
  return (
    <div className="main-container">
        {children}
    </div>
  );
}

export default App;
