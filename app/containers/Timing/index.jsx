import React,{Component} from 'react'
import { connect } from 'react-redux'
import { TimeList ,SearchRoad ,Warning ,Choose } from '../../components';
import { addTodo,replaceTodo,warnText,cleanWarn } from '../../actions/index.jsx'
import Timelink from '../../links/time.jsx'

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
      dispatch(cleanWarn(' '))
    }
    this.setState({
      display:'block'
    });
    console.log('componentWillMount');
  }

  render(){
    var MyComponentStyles = {
        display: this.state.display
    };
    const { dispatch, propinfos,warn } = this.props;
    return(
      <div className="timing">
        <Timelink />
        <div className="show cur">
          <SearchRoad
            index={'timing'}
            infos={propinfos}
            onAddClick={(text,path) =>dispatch(replaceTodo(text,path))}
            onErr={err =>dispatch(warnText(err)) }
            onClean={err=> dispatch(cleanWarn(err)) } />
          <Warning warn = {warn} />
          {propinfos.length == 0?'':<p className="result" style={MyComponentStyles}>搜索结果：</p>}
          {propinfos.length == 0?'':<div className="jg"><TimeList lists={propinfos.length != 0?propinfos.text.data: []} /></div>}
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
