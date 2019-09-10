import { all } from 'redux-saga/effects';

import cart from 'redux/sagas/cart';
import productList from 'redux/sagas/productList';

export default function* sagas() {
  yield all([...cart, ...productList]);
}
