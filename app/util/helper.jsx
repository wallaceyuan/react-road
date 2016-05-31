import axios from 'axios';

function getPics(){
  return axios.get('http://shanghaicity.openservice.kankanews.com/public/road/getnowpic/picid/102_0250_L');
}

export default function getGithubInfo(username){
  return axios.all([
    getPics(),
    getUserInfo(username)
  ]).then((arr) => ({
    repos:arr[0].data,
    bio:arr[1].data}
  ));
}
