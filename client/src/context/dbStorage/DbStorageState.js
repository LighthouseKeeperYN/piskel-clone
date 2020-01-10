import React, { useReducer } from 'react';
import axios from 'axios';

import DbStorageContext from './dbStorageContext';
import dbStorageReducer from './dbStorageReducer';
import {
  GET_PROJECTS,
  ADD_PROJECT,
  DELETE_PROJECT,
  SET_CURRENT_PROJECT,
  UPDATE_PROJECT,
  PROJECT_ERROR,
  CLEAR_PROJECTS,
} from '../types';

const DbStorageState = (props) => {
  const initialState = {
    projects: [],
    currentProject: null,
    error: null,
  };

  const [state, dispatch] = useReducer(dbStorageReducer, initialState);

  const getProjects = async () => {
    try {
      const res = await axios.get('/api/projects');

      dispatch({
        type: GET_PROJECTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROJECT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const addProject = async (project) => {
    const config = { headers: { 'Content-Type': 'application/json' } };

    try {
      const res = await axios.post('/api/projects', project, config);

      dispatch({
        type: ADD_PROJECT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROJECT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const deleteProject = async (id) => {
    try {
      await axios.delete(`/api/projects/${id}`);

      dispatch({
        type: DELETE_PROJECT,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: PROJECT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const updateProject = async (project) => {
    const config = { headers: { 'Content-Type': 'application/json' } };

    try {
      const res = await axios.put(`/api/projects/${project._id}`, project, config);

      dispatch({
        type: UPDATE_PROJECT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROJECT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  const setCurrentProject = (project) => {
    dispatch({ type: SET_CURRENT_PROJECT, payload: project });
  };

  const clearProjects = () => {
    dispatch({ type: CLEAR_PROJECTS });
  };

  return (
    <DbStorageContext.Provider
      value={{
        projects: state.projects,
        currentProject: state.currentProject,
        error: state.error,
        getProjects,
        addProject,
        deleteProject,
        updateProject,
        setCurrentProject,
        clearProjects,
      }}
    >
      {props.children}
    </DbStorageContext.Provider>
  );
};

export default DbStorageState;
