import React, { Component } from "react";
import {Alert, Button} from "react-native";
import { CustomButton, Card, CardSection, Input, Spinner } from "./common";
import { emailChanged, passwordChanged, loginUser,quoteOftheDay} from "../actions"
import { Text} from "react-native";
import { connect } from "react-redux";
import Router from "../Router";

class WelcomePage extends Component {
    onEmailChange(text){
    this.props.emailChanged(text);
  //lert.alert(text+" and password is")

    }


    quoteOftheDay(quoteOftheDay){
      this.props.quoteOftheDay(quoteOftheDay);
      Alert.alert(quoteOftheDay);
    }

    
  
  

  render() {
    




    return (
      <Card>
        <CardSection>
        <Text>What?</Text> 

        <Button onPress={()=>{this.quoteOftheDay("What is Possible is Look Around to Make it Happen")}} title="Hello"/>
        </CardSection>
      </Card>
                  

    );
  }
}
//export default connect(null,emailChanged) (LoginForm);

const mapStateToProps = state => {
  return {
    quoteOftheDay: state.auth.quoteOftheDay,
   };
  };


  export default connect(
    mapStateToProps,
    { quoteOftheDay})(WelcomePage);

    