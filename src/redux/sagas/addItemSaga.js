import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addItem(action) {
    try {
    } catch (error) {
        console.log('Error adding item:', error);
    }
}
function* addItemWatcher() {
    yield takeLatest('ADD_ITEM', addItem);
}
export default addItemWatcher;
