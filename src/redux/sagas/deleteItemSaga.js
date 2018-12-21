import { put as dispatch, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
// import { call } from 'redux-saga/effects';

function* deleteItem(action) {
    try {
        console.log(action.payload);
        yield axios.delete( `/api/shelf/${action.payload}`);
        yield dispatch({ type: 'FETCH_SHELF'})
    } catch (error) {
        console.log('Error deleting shelf:', error);
    }
}
function* deleteItemWatcher() {
    yield takeLatest('DELETE_ITEM', deleteItem);
}
export default deleteItemWatcher;
