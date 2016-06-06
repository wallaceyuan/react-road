import React,{Component} from 'react'
import { connect } from 'react-redux'
import fc from '../../util/helper.jsx'
import { TimeList,SearchRoad } from '../../components';

class Timing extends Component {
  state = {
    list: [],
    display:'none'
  }
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps');
    this.setState({
        value: nextProps.value
    });
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps,nextState){
    console.log('componentWillUpdate');
  }

  componentWillMount(){
    var _this = this;
    let road = this.props.params.roadName;
    fc.getRoadByName(road).then(function (response) {
      _this.setState({
        list:response.data,
        display:'block'
      });
    })
    .catch(function (response) {
      //alert('您输入的道路暂未录入可查询范围');
      console.log(response);
    });

    console.log('componentWillMount');
  }

  render(){
    const { dispatch, propinfos } = this.props
    //console.log( this.props.propinfos.text.data);
    //let data = this.props.propinfos.text;
    //console.log(this.props.propinfos);
    var MyComponentStyles = {
        display: this.state.display
    };
    return(
      <div className="timing">
        <h2>我是Profile我是Profile</h2>
        <div className="show cur">
          <SearchRoad />
          <p className="result" style={MyComponentStyles}>搜索结果：</p>
          <div className="jg">
            <TimeList lists={this.state.list} />
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
      console.log('componentDidMount');
  }

  componentDidUpdate(prevProps,prevState) {
      console.log('componentDidUpdate');
  }

  componentWillUnmount(prevProps,prevState) {
      console.log('componentWillUnmount');
  }
}



function select(state) {
  return {
    propinfos: state.todos
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Timing)
