import React, { Component }  from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";
import firebase from "firebase";

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

    return (
        <Provider store={createStore(reducers)}>
        <View>
            <LoginForm/>
        </View>
        
        </Provider>
    );
}
}
export default App;
