import React ,{ Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import fc from '../../util/helper.jsx';

class SearchRoad extends Component {
  getRef(ref){
    this.roadNameRef = ref;
  }
  handleClick(){
    const roadName = this.roadNameRef.value;
    if(roadName==''){
      alert("太任性了，说好的内容呢");
      //$('#warning').html("太任性了，说好的内容呢").css('display','block');
      return
    }else{
      fc.getRoadByName(roadName).then(function (response) {
        const path = `/timing/${roadName}`;
        browserHistory.push(path)
        console.log(response);
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

export default SearchRoad
