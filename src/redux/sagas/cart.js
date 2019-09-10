// React
import { takeLatest, put } from 'redux-saga/effects';

// Actions
import { Types, checkoutResult } from 'redux/ducks/cart';
import { setNewUrl } from 'redux/ducks/route';

export function* checkout(action) {
  try {
    yield put(setNewUrl('/'));
    yield put(checkoutResult());
  } catch (e) {
    yield put(checkoutResult());
  }
}

const saga = [takeLatest(Types.CHECKOUT, checkout)];

export default saga;
