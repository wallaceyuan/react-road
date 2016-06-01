import React,{Component} from 'react'
import getPics from '../../util/helper.jsx'
import { Slide } from '../../components';


class Home extends Component {
  state = {
    pics: ['a','b','c']
  }
  componentDidMount(){
    getPics()
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
    return(
      <Slide pics={this.state.pics} />
    )
  }
}
export default Home
