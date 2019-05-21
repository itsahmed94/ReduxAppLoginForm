import React, { Component }  from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";
import firebase from "firebase";
import ReduxThunk from "redux-thunk"; //then i added this package
import Routes  from "./Router";
class App extends Component {
state= { loggedIn: null };
//initialized the firebase//
componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyDjqsPb7_HQTQktq6xl-fDGiCVBF2dPUQY",
        authDomain: "mapp-auth-class-ahmed.firebaseapp.com",
        databaseURL: "https://mapp-auth-class-ahmed.firebaseio.com",
        projectId: "mapp-auth-class-ahmed",
        storageBucket: "mapp-auth-class-ahmed.appspot.com",
        messagingSenderId: "407294186543"
    });

}

render() {

    const store = createStore(reducers, {},
        applyMiddleware(ReduxThunk));

    return (
        <Provider store={store}>


           {/* <LoginForm/> */
           }
           <Routes />
       
        
        </Provider>
    );
}
}

export default App;
