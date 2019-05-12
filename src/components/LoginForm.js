import React, { Component } from "react";
import { Text } from "react-native";
import firebase from "firebase";
import { CustomButton, Card, CardSection, Input, Spinner } from "./common";
import { emailChanged} from "../actions"
import { connect } from "react-redux";
class LoginForm extends Component {
    onEmailChange(Text){
this.props.emailChanged(Text);
    }
  render() {
    return (
      <Card>
        <CardSection>
          <Input autoCorrect placeholder="user@gmail.com" label="Email: "
          onChangeText={this.onEmailChange.bind} />
        </CardSection>
        <CardSection>
          <Input secureTextEntry placeholder="password" label="password" />
        </CardSection>
        <CardSection>
          <CustomButton> Login</CustomButton>
        </CardSection>
      </Card>
    );
  }
}
export default connect(null,emailChanged) (LoginForm);