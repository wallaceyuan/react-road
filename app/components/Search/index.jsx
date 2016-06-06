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
      alert("太任性了，说好的内容呢");
      //$('#warning').html("太任性了，说好的内容呢").css('display','block');
      return
    }else{
      fc.getRoadByName(roadName).then(function (response) {
        const path = `/timing/${roadName}`;
        //console.log('response',response);
        _this.props.onAddClick(response);
        browserHistory.push(path)
      })
      .catch(function (response) {
        alert('您输入的道路暂未录入可查询范围');
        console.log(response);
      });
    }
  }
  render(){
   return(
      <div className="inputw">
        <input name="fdjh" type="text" id="search" placeholder="请输入您要查询的路段" ref={(ref)=>this.getRef(ref)}/>
        <a href="javascript:void(0)" id="check" onClick={()=>this.handleClick()}></a>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // dispatch(action) { }
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

export default SearchRoad
