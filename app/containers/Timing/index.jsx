import React,{Component} from 'react'
import { connect } from 'react-redux'
import fc from '../../util/helper.jsx'
import { TimeList ,SearchRoad ,Warning ,Choose } from '../../components';
import { addTodo,replaceTodo,warnText,cleanWarn } from '../../actions/index.jsx'

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
    const { dispatch, propinfos } = this.props
    if(propinfos.length == 0){
      let road = this.props.params.roadName;
      fc.getRoadByName(road).then(function (response) {
          dispatch(replaceTodo(response))
          dispatch(cleanWarn(' '))
      })
      .catch(function (response) {
        dispatch(warnText('您输入的道路暂未录入可查询范围'))
      });
    }
    this.setState({
      display:'block'
    });
    console.log('componentWillMount');
  }

  render(){
    const { dispatch, propinfos,warn } = this.props;
    var MyComponentStyles = {
        display: this.state.display
    };
    return(
      <div className="timing">
        <Choose />
        <div className="show cur">
          <SearchRoad
            infos={propinfos}
            onAddClick={(text,path) =>dispatch(replaceTodo(text,path))}
            onErr={err =>dispatch(warnText(err)) }
            onClean={err=> dispatch(cleanWarn(err)) } />
          <Warning warn = {warn} />
          <p className="result" style={MyComponentStyles}>搜索结果：</p>
          <div className="jg">
            <TimeList lists={propinfos.length != 0?propinfos.text.data: []} />
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
    propinfos: state.todos,
    warn:state.warnTodo
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Timing)
