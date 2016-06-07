import React,{Component } from 'react'

class Warning extends Component {
  render(){
    return(
      <p className="warningtxt" id="warning" style={this.props.warn.style}>{this.props.warn.err}</p>
    );
  }
}

export default Warning
