import React, { Component } from 'react';
import './index.css';

class TimeList extends Component {
  render(){
    let lists = this.props.lists.map((list,index) =>{
        return(
          <div className="in" key={index}>
            <div className="inW">
              <a href="#" id={list.picid}>
                <p className="name">{list.road0}</p>
                <em>{list.road1}</em>
              </a>
            </div>
          </div>
        );
    });
    return(
      <div>{lists}</div>
    );
  }
}

export default TimeList
