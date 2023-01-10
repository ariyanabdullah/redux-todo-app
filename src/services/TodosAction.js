import axios from "axios";
import { todoFailed, todoRequest, todoSuccess } from "./Constants";

const getAllTodos = () => async (dispatch) => {
  dispatch({ type: todoRequest });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({ type: todoSuccess, payload: res.data });
  } catch (error) {
    const err = error.message;

    dispatch({ type: todoFailed, payload: err });
  }
};

export default getAllTodos;
