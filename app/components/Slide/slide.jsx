import React, { Component } from 'react';

export default class SlideLi extends Component {
  render(){
    let nameBox = ['城市快速路概览图','高速公路概览图','长三角城际高速概览']
    let slides = this.props.slides.map((slide,index) =>{
        return(
          <div className="swiper-slide" key={index}>
            <img src={slide}/>
            <p>{nameBox[index]}</p>
          </div>
        );
    });
    return(
			<div className="swiper-wrapper">
        {slides}
			</div>
    );
  }
}
