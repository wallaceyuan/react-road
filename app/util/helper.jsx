import axios from 'axios';

const picOne = '/public/road/getnowpic/picid/102_0250_L';
const picTwo = '/public/road/getnowpic/picid/101_0250_L';
const picThree = '/public/road/getnowpic/picid/100_1001_L';

function getOne(){
  return axios.get(picOne);
}
function getTwo(){
  return axios.get(picTwo);
}
function getThree(){
  return axios.get(picThree);
}

function getAllPics(){
  return axios.all([
    getOne(),
    getTwo(),
    getThree()
  ]).then((arr) => ({
    p1:arr[0].data.data,
    p2:arr[1].data.data,
    p3:arr[2].data.data}
  ));
}

function getRoadByName(road){
  return axios.get(`/public/road/seagetear/name/${road}`)
}

var fuc = {
  getAllPics,
  getRoadByName
}

export default fuc
