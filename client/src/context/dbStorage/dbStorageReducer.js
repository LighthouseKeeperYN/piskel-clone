import {
  GET_PROJECTS,
  ADD_PROJECT,
  DELETE_PROJECT,
  SET_CURRENT,
  UPDATE_PROJECT,
  PROJECT_ERROR,
  CLEAR_PROJECTS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return { ...state, projects: action.payload };
    case ADD_PROJECT:
      return { ...state, projects: [action.payload, ...state.projects] };
    case UPDATE_PROJECT:
      return {
        ...state,
        projects: state.projects.map((project) =>
          project._id === action.payload._id ? action.payload : project
        )
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter((contact) => contact._id !== action.payload)
      };
    case SET_CURRENT:
      return { ...state, current: action.payload };
    case PROJECT_ERROR:
      return { ...state, error: action.payload };
    case CLEAR_PROJECTS:
      return { ...state, projects: [] };
    default:
      return state;
  }
};
