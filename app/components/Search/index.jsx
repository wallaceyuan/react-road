import React ,{ Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

class SearchRoad extends Component {
  render(){
   return(
      <div className="inputw">
        <input name="fdjh" type="text" id="search" placeholder="请输入您要查询的路段" />
        <a href="javascript:void(0)" id="check"></a>
      </div>
    );
  }
}

export default SearchRoad
