import { put as dispatch, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* addItem(action) {
    try {  
        // hitting add item in log
        console.log('add item');
        // axios call to server side
        yield call(axios.post, '/api/shelf', action.payload);
        // dispatch to fetch shelf saga
        yield dispatch({
            type: 'FETCH_SHELF'
        });
        yield dispatch({
            type: 'FETCH_COUNT'
        });
        // dispatch to clear new item reducer
        yield dispatch({
            type: 'CLEAR_NEW_ITEM'
        });
    } catch (error) {
        console.log('Error adding item:', error);
    }
}
function* addItemWatcher() {
    yield takeLatest('ADD_ITEM', addItem);
}
export default addItemWatcher;
