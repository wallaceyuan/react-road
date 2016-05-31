import React, { Component } from 'react';
import { MyComponent } from '../../components';

import './index.css';


const App = ({children, history}) =>{
  return (
    <div className="main-container">
        App
        <div className="container">
          {children}
        </div>
    </div>
  );
}

export default App;
