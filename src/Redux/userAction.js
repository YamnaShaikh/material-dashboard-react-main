import { CREATE_USER, DELETE_USER, EDIT_USER, UPDATE_USER } from "./userConstants";

export const createUser = (values) => (dispatch) => {
  debugger;
  console.log(values);

  dispatch({
    type: CREATE_USER,
    payload: values,
  });
};

export const deleteUser = (id) => {
  debugger;
  return {
    type: DELETE_USER,
    payload: id,
  };
};

export const editUser = (userId) => {
  debugger;
  return {
    type: EDIT_USER,
    payload: {
      id: userId,
    },
  };
};

export const updateUser = (user) => {
  debugger;
  return {
    type: UPDATE_USER,
    payload: user,
  };
};
