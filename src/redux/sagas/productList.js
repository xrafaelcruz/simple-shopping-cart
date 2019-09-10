// React
import { takeLatest, put } from 'redux-saga/effects';

// Actions
import { Types, getProductsResult } from 'redux/ducks/productList';

import products from 'assets/jsons/products';

export function* getProducts(action) {
  try {
    let data = products;
    let totalItems = products.length;

    if (action.payload.params) {
      const { idCategory, begin, end } = action.payload.params;

      data = products.filter(product => {
        if (idCategory) {
          return product.idCategory === Number(idCategory);
        }

        return products;
      });

      if (idCategory) {
        totalItems = data.length;
      }

      data = data.slice(begin, end);
    }

    yield put(getProductsResult(data, totalItems));
  } catch (e) {
    yield put(getProductsResult());
  }
}

const saga = [takeLatest(Types.GET_PRODUCTS, getProducts)];

export default saga;
