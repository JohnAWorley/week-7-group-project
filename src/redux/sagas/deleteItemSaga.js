import { put as dispatch, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteItem(action) {
    try {
        console.log('deleteItem saga', action.payload);
        yield axios.delete( `/api/shelf/${action.payload}`);
        yield dispatch({ type: 'FETCH_SHELF'});
        yield dispatch({ type: 'FETCH_COUNT'});
    } catch (error) {
        console.log('Error deleting shelf:', error);
    }
}
function* deleteItemWatcher() {
    yield takeLatest('DELETE_ITEM', deleteItem);
}

export default deleteItemWatcher;