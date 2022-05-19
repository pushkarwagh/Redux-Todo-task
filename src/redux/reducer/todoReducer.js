import {
  ADD_TODO,
  DELETE_TODO,
  TODO_ERROR,
  TODO_REQUEST,
  TODO_SUCCESS,
  EDIT_TODO,
  // FAV_TODO,
} from "../action/types";

const initialState = {
  list: [],
  loading: false,
  error: "",
  ToggleButton: "",
  inputValue: "",
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state.list, list: [...state.list, action.payload] };

    case DELETE_TODO:
      const updatedList = state.list.filter((li) => li.id !== action.payload);
      return {
        ...state,
        list: updatedList,
      };

    case TODO_REQUEST:
      return {
        ...state.list,
        loading: true,
      };

    case TODO_SUCCESS:
      return {
        loading: false,
        list: [...state.list, ...action.payload.list],
        error: "",
      };

    case TODO_ERROR:
      return {
        loading: false,
        error: [...state.list, action.payload],
      };

    // case FAV_TODO:
    //   const { id, favourite } = action.payload;
    //   const edit_Fav = state.list.find((list) => list.id === id);
    //   const edit_item = { ...edit_Fav, isFavourite: favourite };
    //   const update_List = state.list.map((list) =>
    //     list.id === id ? edit_item : list
    //   );
    //   return {
    //     list: update_List,
    //   };

    case EDIT_TODO:
      const { id, inputValue } = action.payload;
      const edit_title = state.list.find((list) => list.id === id);
      const edit_item = { ...edit_title, title: inputValue };
      const update_List = state.list.map((list) =>
        list.id === id ? edit_item : list
      );

      return {
        list: update_List,
      };

    default:
      return state;
  }
};
export default TodoReducer;
