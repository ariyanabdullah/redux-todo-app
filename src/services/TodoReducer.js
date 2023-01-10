import { todoFailed, todoRequest, todoSuccess } from "./Constants";

const initialTodos = {
  isLoading: false,
  todos: [],
  error: null,
};

const TodoReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case todoRequest:
      return {
        ...state,
        isLoading: true,
      };

    case todoSuccess:
      return {
        isLoading: false,
        todos: action.payload,
        error: null,
      };

    case todoFailed:
      return {
        isLoading: false,
        todos: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default TodoReducer;
