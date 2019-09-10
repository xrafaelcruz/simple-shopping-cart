// Action Types
export const Types = {
  SET_NEW_URL: 'route/SET_NEW_URL'
};

// Action Creators
export const setNewUrl = url => ({ type: Types.SET_NEW_URL, payload: { url } });

// Reducer
const INITIAL_STATE = {
  newUrl: null
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_NEW_URL:
      return { newUrl: action.payload.url };

    default:
      return state;
  }
}
