import React,{Component} from 'react'
import { connect } from 'react-redux'

import fuc from '../../util/helper.jsx'
import { Slide,SearchRoad } from '../../components';
import { addTodo,replaceTodo } from '../../actions/index.jsx'

class Home extends Component {
  state = {
    pics: ['a','b','c']
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
    const { dispatch, propinfos } = this.props
    console.log(this.props);
    return(
      <div>
          <img src="../../public/images/icon_s.png" style={style} className="jt"/>
          <div className="page_contain">
            <div className='pagination clearfix'></div>
          </div>
          <Slide pics={this.state.pics} />
          <SearchRoad infos={propinfos} onAddClick={text =>dispatch(replaceTodo(text))} />
          <div className="road-index">
      			<ul>
      				<li className="clearfix">
      						<a className="road-list" id="one" href="/public/road/timing">
      								<p>分路段实时交通详情</p>
      						</a>
      						<a className="road-list" id="two" href="/public/road/snapshot">
      								<p>道路实况快照</p>
      						</a>
      				</li>
      				<li className="clearfix">
      						<a className="road-list" id="three" href="/public/road/splan">
      								<p>高架封路计划</p>
      						</a>
      						<a className="road-list" id="four" href="/public/road/snight">
      								<p>夜间施工备案</p>
      						</a>
      				</li>
      				<li className="clearfix">
      						<a className="road-list" id="five" href="/public/road/sblock">
      								<p>公路阻断信息</p>
      						</a>
      						<a className="road-list" id="six" href="/public/road/smoney">
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
    visibilityFilter: state.propinfos
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(Home)
