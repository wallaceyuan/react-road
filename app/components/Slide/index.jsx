import React, { Component } from 'react';
import SlideLi from './slide.jsx';
import Jquery from 'jquery';

class Slide extends Component {
  componentDidMount(){
    console.log('componentDidMount');
  }
  componentDidUpdate(prevProps,prevState) {
    var imgW = 800;
    var imgH = 640;
    var winw = document.body.clientWidth;
    var slideH = imgH/imgW *winw +40;
    Jquery('.swiper-container,.swiper-wrapper,.sw').css('height',slideH);
    Jquery('.swiper-slide').css('height',slideH);
    var swiperNested = new Swiper('#slider',{
      mode:"horizontal",
      pagination:'.pagination',
      calculateHeight:true
    });
  }
  render(){
    return(
      <div className="sw">
        <div className="swiper-container" id="slider">
          <SlideLi slides={this.props.pics}/>
      	</div>
      </div>
    );
  }
}

export default Slide
