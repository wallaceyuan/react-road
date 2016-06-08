import React,{Component} from 'react'
import { connect } from 'react-redux'
import Timelink from '../../links/time.jsx'

class Section extends Component {
  render(){
    let style= {
      'marginBottom':'80px'
    }
    return(
      <div>
        <Timelink />
        <div className="show cur">
          <div className="selectW">
          	<div className="select">
          		<div id="elevated" className="text">
          			<p>地面道路</p>
          		</div>
          	</div>
          </div>
          <div className="selectW">
          	<div className="select">
          		<div id="elevated" className="text">
          			<p>快速道路</p>
          		</div>
          	</div>
          </div>
          <div className="selectW">
          	<div className="select">
          		<div id="elevated" className="text">
          			<p>高速道路</p>
          		</div>
          	</div>
          </div>
          <div className="selectW" style={style}>
          	<div className="select">
          		<div id="elevated" className="text">
          			<p>城际高速</p>
          		</div>
          	</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section
