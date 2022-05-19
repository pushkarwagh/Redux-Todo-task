import {
  ADD_TODO,
  DELETE_TODO,
  TODO_ERROR,
  TODO_REQUEST,
  TODO_SUCCESS,
  EDIT_TODO,
  // FAV_TODO,
} from "./types";

export const todoRequest = () => {
  return {
    type: TODO_REQUEST,
  };
};

export const todoSuccess = (list) => {
  return {
    type: TODO_SUCCESS,
    payload: {
      list,
    },
  };
};

export const todoError = (error) => {
  return {
    type: TODO_ERROR,
    payload: error,
  };
};

export const addToDo = (inputVal) => {
  return {
    type: ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      title: inputVal,
      isFavorite:false,
    },
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};


export const editToDo = (id, inputValue) => {
  return {
    type: EDIT_TODO,
    payload: { id, inputValue },
  };
};

// export const favouriteToDo = (id, favourite) => {
//   return {
//     type: FAV_TODO,
//     payload: { id, favourite },
//   };
// };

