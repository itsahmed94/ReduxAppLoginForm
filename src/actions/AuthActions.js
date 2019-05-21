import { EMAIL_CHANGED, PASSWORD_CHANGED ,LOGIN_USER_SUCCESS,QUOTE_OF_THE_DAY} from "./types";
export * from "./AuthActions";
export * from "./EmployeeActions";
import { Actions } from "react-native-router-flux";
import firebase from "firebase";

export const emailChanged = text => {
return {
type: EMAIL_CHANGED,
payload: text
};

};


export const passwordChanged = text => {
  return {
  type: PASSWORD_CHANGED,
  payload: text
  };
};




export const loginUser = ( email, password ) => {
  return dispatch => {
    console.log("Your Email within firebase" +email);
  firebase
  .auth()
  .signInWithEmailAndPassword(email,password)
  .then(user => loginUserSuccess(dispatch, user))
  .catch(() => {
  firebase
  .auth()
  .createUserWithEmailAndPassword(email,password)
  .then(user => loginUserSuccess(dispatch, user));
  });

  const loginUserSuccess = (dispatch, user) => {
    dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
    });
    Actions.employeeCreate(user);
    };
  };
  };

  export const quoteOftheDay = ({name, phone, shift}) => {
    return {
    type: QUOTE_OF_THE_DAY,
    payload: {name, phone, shift}
    };
  };