import { put as dispatch, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {call} from 'redux-saga/effects';

function* fetchShelf(action) {
    try {
        const setShelf = yield axios.get('/api/shelf'); // get shelf item
        yield dispatch({type: 'SET_SHELF', payload: setShelf.data})
    } catch (error) {
        console.log('Error fetching shelf:', error);
    }
}
function* fetchShelfWatcher(){
    yield takeLatest('FETCH_SHELF', fetchShelf); 
}
export default fetchShelfWatcher;
