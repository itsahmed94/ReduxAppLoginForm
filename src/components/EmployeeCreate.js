import React, { Component } from "react";
import { Picker,Text,Alert } from "react-native";
import { connect } from "react-redux";
import { quoteOftheDay} from "../actions"

import { Card, CardSection, Input, CustomButton

} from "./common";




class EmployeeCreate  extends Component {

    onAddEmployeebtn(phone,email,shift){
      this.props.quoteOftheDay(phone,email,shift)
      Alert.alert(phone); 
    }


    render()
    {




        return(

            <Card>
                 
                    <CardSection />
                    <CardSection>
                      <CustomButton onPress={() =>{this.onAddEmployeebtn("Your Quote of the day is", "asd","asdfsd")}}>Add Employee</CustomButton>
                    </CardSection>
           
                  </Card>

        );
    }

}

const mapStateToProps = state => {
  return {
    phone: state.auth.phone,
    email: state.auth.email,
    shift: state.auth.shift
   };
  };


  export default connect(
    mapStateToProps,
    { quoteOftheDay})(EmployeeCreate);

    