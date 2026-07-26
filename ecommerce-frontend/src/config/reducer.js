import {
  POST_CATEGORY,
  GET_CATEGORIES,
  GET_PRODUCTS,
  POST_USER,
  POST_PRODUCTS,
  GET_USER,
  GET_CURRENCY,
  LOGOUT,
  DELETE_PRODUCT,
  DELETE_CATEGORY,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QTY,
  CLEAR_CART,
  SET_SEARCH_QUERY,
  SET_USER_ORDERS,
  SET_ALL_ORDERS
} from "./values";

export default (state, action) => {
  let updatedCart;
  switch (action.type) {
    case GET_CURRENCY:
      return {
        ...state,
        currency: action.payload
      };
    case POST_USER:
      return {
        ...state,
        user: action.payload
      };
    case POST_CATEGORY:
      return {
        ...state,
        categories: action.payload
      };
    case POST_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };

    case LOGOUT:
      return {
        ...state,
        user: null
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: action.payload
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        categories: action.payload
      };

    // Cart Reducers
    case ADD_TO_CART: {
      const product = action.payload;
      const existingIndex = state.cart.findIndex(item => item.id === product.id);
      if (existingIndex > -1) {
        updatedCart = state.cart.map((item, idx) =>
          idx === existingIndex
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...product, quantity: product.quantity || 1 }];
      }
      localStorage.setItem("smartcart_cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }

    case REMOVE_FROM_CART: {
      updatedCart = state.cart.filter(item => item.id !== action.payload);
      localStorage.setItem("smartcart_cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }

    case UPDATE_CART_QTY: {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        updatedCart = state.cart.filter(item => item.id !== id);
      } else {
        updatedCart = state.cart.map(item =>
          item.id === id ? { ...item, quantity } : item
        );
      }
      localStorage.setItem("smartcart_cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }

    case CLEAR_CART: {
      localStorage.removeItem("smartcart_cart");
      return { ...state, cart: [] };
    }

    // Search Reducer
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };

    // Order Reducers
    case SET_USER_ORDERS:
      return {
        ...state,
        userOrders: action.payload
      };

    case SET_ALL_ORDERS:
      return {
        ...state,
        allOrders: action.payload
      };

    default:
      return state;
  }
};

