import { combineReducers } from 'redux';

import cart from 'redux/ducks/cart';
import header from 'redux/ducks/header';
import productList from 'redux/ducks/productList';
import route from 'redux/ducks/route';

export default combineReducers({
  cart,
  header,
  productList,
  route
});
