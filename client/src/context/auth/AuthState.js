import React, { useReducer } from 'react';
import axios from 'axios';

import AuthContext from './authContext';
import authReducer from './authReducer';

import { setAuthToken } from '../../shared/utilities';
import { LOCAL_STORAGE_TOKEN_KEY, HTTP_JSON_HEADER } from '../../shared/constants';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY),
    isAuthenticated: null,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const loadUser = async () => {
    setAuthToken(localStorage.token);

    try {
      const res = await axios.get('/api/auth');

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  const register = async (formData) => {
    const config = { headers: HTTP_JSON_HEADER };

    try {
      const res = await axios.post('/api/users', formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg || err.response.data.errors[0].msg,
      });
    }
  };

  const logIn = async (formData) => {
    const config = { headers: HTTP_JSON_HEADER };

    try {
      const res = await axios.post('/api/auth', formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg || err.response.data.errors[0].msg,
      });
    }
  };

  const logOut = () => dispatch({ type: LOGOUT });

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        logIn,
        logOut,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
