import React, { useReducer } from "react";

import axiosClient from "./axios";
import currencyClient from "./apiCurrency";

// context
import userContext from "./context";

// reducer
import Reducer from "./reducer";

// type tags
import {
  GET_CURRENCY,
  GET_USER,
  GET_CATEGORIES,
  GET_PRODUCTS,
  POST_USER,
  POST_CATEGORY,
  POST_PRODUCTS,
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

const Context = props => {
  // SmartCart: Restore user and cart from localStorage so state survives page refresh
  const storedUser = localStorage.getItem("user");
  const storedCart = localStorage.getItem("smartcart_cart");
  const initialState = {
    user: storedUser ? JSON.parse(storedUser) : null,
    currency: null,
    products: [],
    categories: [],
    cart: storedCart ? JSON.parse(storedCart) : [],
    searchQuery: "",
    userOrders: [],
    allOrders: []
  };

  // Dispatch to execute actions
  const [state, dispatch] = useReducer(Reducer, initialState);

  // API Currency
  const getCurrency = async () => {
    const res = await currencyClient.get("");

    dispatch({
      type: GET_CURRENCY,
      payload: res.data
    });
  };

  // POST Methods
  const addUser = async user => {
    const res = await axiosClient.post("/users/add", user);

    localStorage.setItem("user", JSON.stringify(res.data));

    dispatch({
      type: POST_USER,
      payload: res.data
    });
  };
  const addCategory = async category => {
    const res = await axiosClient.post("/categories/add", category);

    dispatch({
      type: POST_CATEGORY,
      payload: res.data
    });
  };
  const addProduct = async product => {
    const res = await axiosClient.post("/products/add", product);

    dispatch({
      type: POST_PRODUCTS,
      payload: res.data
    });
  };

  // GET Methods
  const getUser = async user => {
    const res = await axiosClient.get("/users/" + user.username);

    if (res.data.password === user.password) {
      localStorage.setItem("user", JSON.stringify(user));
    }

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };
  const getCategories = async () => {
    const res = await axiosClient.get("/categories/all");

    dispatch({
      type: GET_CATEGORIES,
      payload: res.data
    });
  };
  const getProducts = async () => {
    const res = await axiosClient.get("/products/all");

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  };

  // SmartCart: Logout — clear localStorage and reset user state
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: LOGOUT });
  };

  // SmartCart: Delete product by id — calls DELETE /api/products/delete/{id}
  const deleteProduct = async (id) => {
    const res = await axiosClient.delete(`/products/delete/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: res.data
    });
  };

  // SmartCart: Delete category by id — calls DELETE /api/categories/delete/{id}
  const deleteCategory = async (id) => {
    const res = await axiosClient.delete(`/categories/delete/${id}`);
    dispatch({
      type: DELETE_CATEGORY,
      payload: res.data
    });
  };

  // Cart Methods
  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };

  const updateCartQty = (id, quantity) => {
    dispatch({ type: UPDATE_CART_QTY, payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  // Search Methods
  const setSearchQuery = (query) => {
    dispatch({ type: SET_SEARCH_QUERY, payload: query });
  };

  // Order Methods
  const createOrder = async (orderData) => {
    const res = await axiosClient.post("/orders/create", orderData);
    clearCart();
    return res.data;
  };

  const getUserOrders = async (username) => {
    const res = await axiosClient.get(`/orders/user/${username}`);
    dispatch({ type: SET_USER_ORDERS, payload: res.data });
  };

  const getAllOrders = async () => {
    const res = await axiosClient.get("/orders/all");
    dispatch({ type: SET_ALL_ORDERS, payload: res.data });
  };

  const updateOrderStatus = async (orderId, status) => {
    const res = await axiosClient.put(`/orders/${orderId}/status`, { status });
    getAllOrders();
    return res.data;
  };

  return (
    <userContext.Provider
      value={{
        user: state.user,
        currency: state.currency,
        categories: state.categories,
        products: state.products,
        cart: state.cart,
        searchQuery: state.searchQuery,
        userOrders: state.userOrders,
        allOrders: state.allOrders,
        addUser,
        addCategory,
        addProduct,
        getUser,
        getCategories,
        getProducts,
        getCurrency,
        logout,
        deleteProduct,
        deleteCategory,
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        setSearchQuery,
        createOrder,
        getUserOrders,
        getAllOrders,
        updateOrderStatus
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default Context;
