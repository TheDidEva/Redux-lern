import { put } from 'redux-saga/effects';
import { incrimentCashActrion } from '../store/cashReducer';

//put - це як dispatch тільки для асинхроних елементів


const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* incrememntWorker() {
    yield delay(1000)
    yield put(incrimentCashActrion());
}
function* decrementWorker() {

}

function* countWatcher() {

}