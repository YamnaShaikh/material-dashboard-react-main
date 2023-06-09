import { CREATE_USER, DELETE_USER, EDIT_USER, UPDATE_USER } from "./userConstants";

const initialState = {
  users: [],
  editUser: null,
};
const userReducer = (state = initialState, action) => {
  //debugger;
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case DELETE_USER:
      //   debugger;
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    case EDIT_USER:
      debugger;
      return {
        ...state,
        editUser: state.users.filter((user) => user.id === action.payload.id),
      };

    case UPDATE_USER:
      debugger;
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.payload.id ? action.payload : user)),
        editUser: null,
      };
    default:
      return state;
  }
};

export default userReducer;
