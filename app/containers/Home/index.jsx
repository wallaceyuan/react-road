import React,{Component} from 'react'
import { connect } from 'react-redux'
import { Router ,browserHistory ,Link } from 'react-router';

import fuc from '../../util/helper.jsx'
import { Slide,SearchRoad,Warning } from '../../components';
import { addTodo,replaceTodo,warnText,cleanWarn } from '../../actions/index.jsx'

class Home extends Component {
  state = {
    pics: ['a','b','c']
  }
  componentWillMount(){
    console.log(this.props);
  }
  componentDidMount(){
    fuc.getAllPics()
    .then((data) =>{
      var picone = `data:image/png;base64,${data.p1[0]}`;
      var pictwo = `data:image/png;base64,${data.p2[0]}`;
      var picthree = `data:image/png;base64,${data.p3[0]}`;
      var picBox = [picone,pictwo,picthree];
      this.setState({
        pics:picBox
      });
    });
  }
  render(){
    var style = {width:'12px',height:'12px',display:'block'};
    const { dispatch, propinfos,warn } = this.props
    return(
      <div className="home">
          <img src="../../public/images/icon_s.png" style={style} className="jt"/>
          <div className="page_contain">
            <div className='pagination clearfix'></div>
          </div>
          <Slide pics={this.state.pics} />
          <SearchRoad
            index={'index'}
            infos={propinfos}
            onAddClick={(text,path) =>dispatch(replaceTodo(text,path))}
            onErr={err =>dispatch(warnText(err)) }
            onClean={err=> dispatch(cleanWarn(err)) } />
          <Warning warn = {warn} />
          <div className="road-index">
      			<ul>
      				<li className="clearfix">
                <Link to="/section/" id="one" className="road-list"><p>分路段实时交通详情</p></Link>
                <Link to="/snapshot/" id="two" className="road-list"><p>道路实况快照</p></Link>
      				</li>
      				<li className="clearfix">
                <Link to="/splan/" id="three" className="road-list"><p>高架封路计划</p></Link>
                <Link to="/snight/" id="four" className="road-list"><p>夜间施工备案</p></Link>
      				</li>
      				<li className="clearfix">
      						<a className="road-list" id="five" href="/public/road/sblock">
      								<p>公路阻断信息</p>
      						</a>
      						<a className="road-list" id="six" href="/smoney/">
      								<p>高速通行费查询</p>
      						</a>
      				</li>
      			</ul>
          </div>
      </div>
    )
  }
}

function select(state) {
  return {
    propinfos: state.todos,
    warn:state.warnTodo
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Home)
