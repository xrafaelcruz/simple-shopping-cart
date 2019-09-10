import groupBy from 'assets/scripts/groupBy';

// Action Types
export const Types = {
  ADD: 'cart/ADD',
  REMOVE: 'cart/REMOVE',

  CLEAR: 'cart/CLEAR',

  CHECKOUT: 'cart/CHECKOUT',
  CHECKOUT_RESULT: 'cart/CHECKOUT_RESULT'
};

// Action Creators
export const addToCart = product => ({ type: Types.ADD, payload: { product } });
export const removeFromCart = id => ({ type: Types.REMOVE, payload: { id } });

export const clearCart = () => ({ type: Types.CLEAR, payload: {} });

export const checkout = products => ({ type: Types.CHECKOUT, payload: { products } });
export const checkoutResult = () => ({ type: Types.CHECKOUT_RESULT, payload: {} });

const productsLocalStorage = JSON.parse(localStorage.getItem('products'));
const initProducts = productsLocalStorage || [];
const initQuantityOfProducts = initProducts.length > 0 ? getQuantityOfProducts(initProducts) : 0;
const initFinalValue = initProducts.length > 0 ? getFinalValue(initProducts) : 0;
const initProductGroup = initProducts.length > 0 ? groupById(initProducts) : [];

// Reducer
const INITIAL_STATE = {
  loading: false,
  products: initProducts,
  quantityOfProducts: initQuantityOfProducts,
  finalValue: initFinalValue,
  productGroup: initProductGroup
};

export default function reducer(state = INITIAL_STATE, action) {
  let newProducts = [...state.products];
  let newQuantityOfProducts, finalValue, productGroup;

  switch (action.type) {
    case Types.ADD:
      newProducts = addProduct(newProducts, action.payload.product);
      newQuantityOfProducts = getQuantityOfProducts(newProducts);
      finalValue = getFinalValue(newProducts);
      productGroup = groupById(newProducts);

      localStorage.setItem('products', JSON.stringify(newProducts));

      return {
        ...state,
        products: newProducts,
        quantityOfProducts: newQuantityOfProducts,
        finalValue: finalValue,
        productGroup: productGroup
      };

    case Types.REMOVE:
      newProducts = removeProduct(newProducts, action.payload.product);
      newQuantityOfProducts = getQuantityOfProducts(newProducts);
      finalValue = getFinalValue(newProducts);

      localStorage.setItem('products', JSON.stringify(newProducts));

      return {
        ...state,
        products: newProducts,
        quantityOfProducts: newQuantityOfProducts,
        finalValue: finalValue
      };

    case Types.CHECKOUT:
      return {
        ...state,
        loading: true
      };

    case Types.CHECKOUT_RESULT:
      return {
        ...state,
        loading: false
      };

    case Types.CLEAR:
      return INITIAL_STATE;

    default:
      return state;
  }
}

function addProduct(products, product, quantity = 1) {
  const thereProduct = products.filter(p => product.id === p.id);

  if (thereProduct[0]) {
    thereProduct[0].amount = thereProduct[0].amount + quantity;
    products[thereProduct[0].index] = thereProduct[0];
  } else {
    products.push({
      ...product,
      index: products.length,
      amount: quantity
    });
  }

  return products;
}

function removeProduct(products, product, quantity = 1) {
  const thereProduct = products.filter(p => product.id === p.id);

  if (thereProduct[0]) {
    thereProduct[0].amount = thereProduct[0].amount - quantity;

    if (thereProduct[0].amount === 0) {
      products = products.filter(p => product.id !== p.id);
    } else {
      products[thereProduct[0].index] = thereProduct[0];
    }
  }

  return products;
}

function getFinalValue(products) {
  return products.reduce((prev, cur) => {
    const totalCur = cur.price * cur.amount;

    if (prev.price) {
      return prev.price * prev.amount + totalCur;
    }

    return prev + totalCur;
  }, 0);
}

function getQuantityOfProducts(products) {
  return products.reduce((prev, cur) => {
    if (prev.amount) {
      return prev.amount + cur.amount;
    }

    return prev + cur.amount;
  }, 0);
}

function groupById(products) {
  return groupBy(products, 'id');
}
