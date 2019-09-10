// Action Types
export const Types = {
  GET_PRODUCTS: 'productList/GET_PRODUCTS',
  GET_PRODUCTS_RESULT: 'productList/GET_PRODUCTS_RESULT'
};

// Action Creators
export const getProducts = params => ({
  type: Types.GET_PRODUCTS,
  payload: { params }
});
export const getProductsResult = (products, totalItems) => ({
  type: Types.GET_PRODUCTS_RESULT,
  payload: { products, totalItems }
});

// Reducer
const INITIAL_STATE = {
  loading: false,
  products: [],
  totalItems: 0
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_PRODUCTS:
      return { ...state, loading: true };

    case Types.GET_PRODUCTS_RESULT:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        totalItems: action.payload.totalItems
      };

    default:
      return state;
  }
}
