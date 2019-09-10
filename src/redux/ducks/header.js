// Action Types
export const Types = {
  DISABLE_HEADER_CUSTOM: 'header/DISABLE_HEADER_CUSTOM',
  ENABLE_HEADER_CUSTOM: 'header/ENABLE_HEADER_CUSTOM'
};

// Action Creators
export const disableHeaderCustom = params => ({
  type: Types.DISABLE_HEADER_CUSTOM,
  payload: { params }
});
export const enableHeaderCustom = products => ({
  type: Types.ENABLE_HEADER_CUSTOM,
  payload: { products }
});

// Reducer
const INITIAL_STATE = {
  showMiniCart: false,
  showBackOption: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.DISABLE_HEADER_CUSTOM:
      return {
        showMiniCart: true,
        showBackOption: false
      };

    case Types.ENABLE_HEADER_CUSTOM:
      return {
        showMiniCart: false,
        showBackOption: true
      };

    default:
      return state;
  }
}
