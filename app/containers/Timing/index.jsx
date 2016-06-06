import React,{Component} from 'react'
import { connect } from 'react-redux'
import fc from '../../util/helper.jsx'
import { TimeList,SearchRoad } from '../../components';
import { addTodo,replaceTodo } from '../../actions/index.jsx'

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
    console.log(this.props);

    var _this = this;
    const { dispatch, propinfos } = this.props
    if(this.props.propinfos.length != 0){
      let road = this.props.params.roadName;
      fc.getRoadByName(road).then(function (response) {
        _this.setState({
          display:'block'
        });

      })
      .catch(function (response) {
        //alert('您输入的道路暂未录入可查询范围');
        console.log(response);
      });
    }else{
      _this.setState({
        display:'block'
      });
    }
    console.log('componentWillMount');
  }

  render(){
    const { dispatch, propinfos } = this.props
    var MyComponentStyles = {
        display: this.state.display
    };
    return(
      <div className="timing">
        <h2>我是Profile我是Profile</h2>
        <div className="show cur">
          <SearchRoad infos={propinfos} onAddClick={text =>dispatch(replaceTodo(text))} />
          <p className="result" style={MyComponentStyles}>搜索结果：</p>
          <div className="jg">
            <TimeList lists={propinfos} />
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
