import React, { Component } from 'react';
import { MyComponent } from '../../components';
import './index.css'

const App = ({children, history}) =>{
  var style = {
    width:'12px',
    height:'12px',
    display:'block'
  };
  return (
    <div className="main-container">
        <img src="../../public/images/icon_s.png" style={style} className="jt"/>
        <div className="page_contain">
          <div className='pagination clearfix'></div>
        </div>
        {children}
    </div>
  );
}

export default App;
