import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";

const INITITAL_STATE = {
  cartItems: [],
  hidden: true,
};

const cartReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
