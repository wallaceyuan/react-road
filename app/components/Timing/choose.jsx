import React ,{ Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import fc from '../../util/helper.jsx';
import { addTodo  } from '../../actions/index.jsx'


class Choose extends Component {
  render(){
    return(
      <div className="twoW">
      	<div className="two_choose clearfix">
      		<p className="one cur">搜索路段</p>
      		<p className="two">选择路段</p>
      	</div>
      </div>
    );
  }
}

export default Choose
