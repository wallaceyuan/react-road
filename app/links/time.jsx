import React ,{ Component, PropTypes } from 'react'
import { Router, Route, browserHistory, Link } from 'react-router'
import { connect } from 'react-redux'

class Timelink extends Component {
  render(){
    const { dispatch, path } = this.props;
    return(
      <div className="twoW">
      	<div className="two_choose clearfix">
          <Link to="/timing/" activeClassName="active"><p className="one">选择路段</p></Link>
          <Link to="/section/" activeClassName="active" ><p className="two">选择路段</p></Link>
      	</div>
      </div>
    );
  }
}
function select(state) {
  return {
    path: state.todos.path
  }
}
export default connect(select)(Timelink)
