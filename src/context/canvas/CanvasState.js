import React, { useReducer } from 'react';

import CanvasContext from './CanvasContext';
import CanvasReducer from './CanvasReducer';

import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS } from '../types';

const CanvasState = (props) => {
  const initialState = {
    cursorPositionCurrentX: 0,
    cursorPositionCurrentY: 0,
    cursorPositionPreviousX: 0,
    cursorPositionPreviousY: 0
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);



  const getUserRepos = async (userName) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
