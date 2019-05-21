import React, { Component } from "react";
//import { Text } from "react-native";
//import firebase from "firebase";
import { CustomButton, Card, CardSection, Input, Spinner } from "./common";
import { emailChanged , passwordChanged, loginUser} from "../actions"
import { connect } from "react-redux";
import {Alert} from "react-native";
import Router from "../Router"

//import { PASSWORD_CHANGED } from "../actions/types";
//class LoginForm extends Component {
  //code is edited when error occured....  
 // onEmailChange(text){
//emailChanged(text);
   // }

   
class LoginForm extends Component {
  onEmailChange(text){
  this.props.emailChanged(text);
//lert.alert(text+" and password is")

  }

    onPasswordChange(text){
    this.props.passwordChanged(text);
    }

    onLoginUser(email,password){
     
      console.log("Your Email is"+email+" "+password)
      this.props.loginUser(email,password);
 } 
  render() {
    return (
      <Card>
        <CardSection>
          <Input autoCorrect placeholder="user@gmail.com" label="Email: "
          onChangeText={this.onEmailChange.bind(this)}  value={this.props.email}/>
        </CardSection>
        <CardSection>
          <Input secureTextEntry placeholder="password" label="password" value={this.props.password}  onChangeText={this.onPasswordChange.bind(this)}   />
        </CardSection>
        <CardSection>
          <CustomButton onPress={() => this.onLoginUser(this.props.email,this.props.password)}> Login</CustomButton>
        </CardSection>
      </Card>
                  

    );
  }
}
const mapStateToProps = state => {
  return {
  email: state.auth.email,
  password: state.auth.password
  };
  };

  export default connect(
    mapStateToProps,
    { emailChanged, passwordChanged, loginUser } )(LoginForm);
