import React,{Component} from 'react'
import { connect } from 'react-redux'
import './index.css'
class Smoney extends Component {
  handleSubmit = (e)=> {
    e.preventDefault();
    let formData  = {
      type1 : this.refs.type1.value,
      type2 : this.refs.type2.value,
      type3 : this.refs.type3.value,
    }
    console.log('你提交的数据是:')
    console.log(formData);
  }
  render(){
    return(
      <div className="smoney">
        <span className="choose">车辆类型选择:</span>
      	<div className="select">
      		<select className="text" id="typesize" ref="type1">
      				<option value="1">一类（7座及以下）</option>
      				<option value="2">二类（8座至19座客车）</option>
      				<option value="3">三类（20座至39座客车）</option>
      				<option value="4">四类（40座及40座以上客车）</option>
      				<option value="5">五类（2吨及以下）</option>
      				<option value="6">六类（2吨到5吨）</option>
      				<option value="7">七类（5吨到10吨）</option>
      				<option value="8">八类（10吨到15吨）</option>
      				<option value="9">九类（15吨及15吨以上）</option>
      				<option value="10">十类（20英尺集卡）</option>
      				<option value="11">十一类（40英尺集卡）</option>
      		</select>
      	</div>
      	<span className="choose">入口收费站:</span>
      	<div className="select selecteleva">
      		<select className="text" onchange="selectPrint(1)" id="1" ref="type2">
      				<option value="">请选择高速</option>
      				<option value="G15沈海高速">G15沈海高速</option>
      				<option value="G1501上海绕城高速">G1501上海绕城高速</option>
      				<option value="G2京沪高速">G2京沪高速</option>
      				<option value="G40沪陕高速">G40沪陕高速</option>
      				<option value="G50沪渝高速">G50沪渝高速</option>
      				<option value="G60沪昆高速">G60沪昆高速</option>
      				<option value="S19新卫高速">S19新卫高速</option>
      				<option value="S2沪芦高速">S2沪芦高速</option>
      				<option value="S26沪常高速">S26沪常高速</option>
      				<option value="S32申嘉湖高速">S32申嘉湖高速</option>
      				<option value="S36亭枫高速">S36亭枫高速</option>
      				<option value="S4沪金高速">S4沪金高速</option>
      		</select>
      	</div>
      	<span className="choose">出口收费站:</span>
      	<div className="select selecteleva">
       		<select className="text" onchange="selectPrint(3)" id="3" ref="type3">
      				<option value="">请选择高速</option>
      				<option value="G15沈海高速">G15沈海高速</option>
      				<option value="G1501上海绕城高速">G1501上海绕城高速</option>
      				<option value="G2京沪高速">G2京沪高速</option>
      				<option value="G40沪陕高速">G40沪陕高速</option>
      				<option value="G50沪渝高速">G50沪渝高速</option>
      				<option value="G60沪昆高速">G60沪昆高速</option>
      				<option value="S19新卫高速">S19新卫高速</option>
      				<option value="S2沪芦高速">S2沪芦高速</option>
      				<option value="S26沪常高速">S26沪常高速</option>
      				<option value="S32申嘉湖高速">S32申嘉湖高速</option>
      				<option value="S36亭枫高速">S36亭枫高速</option>
      				<option value="S4沪金高速">S4沪金高速</option>
      		</select>
      	</div>
      	<p className="warningtxt" id="w3">出入口不能选择同一个收费站</p>
      	<div className="show-data">
      		<p>最短行驶距离: <span className="color" id="dis">--</span></p>
      		<p>收费金额： <span className="color" id="price">--</span></p>
      		<a id="check" href="javascript:void(0)" onClick={this.handleSubmit}>
      				查&nbsp;&nbsp;询
      		</a>
      	</div>
      </div>
    );
  }
}

export default Smoney
