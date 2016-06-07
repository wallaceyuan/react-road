import React ,{ Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import fc from '../../util/helper.jsx';
import { addTodo  } from '../../actions/index.jsx'

class SearchRoad extends Component {
  getRef(ref){
    this.roadNameRef = ref;
  }
  handleClick(){
    var _this = this;
    const roadName = this.roadNameRef.value;
    if(roadName==''){
      _this.props.onErr('太任性了，说好的内容呢');
      return
    }else{
      fc.getRoadByName(roadName).then(function (response) {
        const path = `/timing/${roadName}`;
        _this.props.onAddClick(response,path);
        _this.props.onClean(' ');
        browserHistory.push(path)
      })
      .catch(function (response) {
        _this.props.onErr('您输入的道路暂未录入可查询范围');
        console.log(response);
      });
    }
  }
  focus = ()=>{
    this.props.onClean();
  }
  render(){
   return(
      <div className="inputw">
        <input name="fdjh" type="text" id="search" placeholder="请输入您要查询的路段"
          ref={(ref)=>this.getRef(ref)}
          onFocus={ this.focus } />
        <a href="javascript:void(0)" id="check" onClick={()=>this.handleClick()}></a>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

export default SearchRoad
