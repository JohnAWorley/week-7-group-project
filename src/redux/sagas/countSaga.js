import { put as dispatch, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {call} from 'redux-saga/effects';

function* count(){
  try{
    const itemCount = yield call(axios.get, '/api/shelf/count')
    yield dispatch({type: 'SET_COUNT' , payload: itemCount.data})
  }catch(error){
    console.log(error);
    
  }
}
function* countWatcher(){
  yield takeLatest('FETCH_COUNT', count); 
}
export default countWatcher;