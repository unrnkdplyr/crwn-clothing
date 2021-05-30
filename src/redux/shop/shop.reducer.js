import ShopActionsTypes from "./shop.types";

const INITITAL_STATE = {
  collections: null,
  errorMessage: undefined,
  isFetching: false,
};

const shopReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case ShopActionsTypes.FETCH_COLLECTIONS_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    case ShopActionsTypes.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };
    case ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, isFetching: false, collections: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
