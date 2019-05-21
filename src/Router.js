import React from "react";
import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import EmployeeCreate from "./components/EmployeeCreate";
import WelcomePage from "./components/WelcomePage";


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" >
            <Scene key="auth" component={LoginForm} title="Login Form" initial={true}/>
            <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee Record" />


      </Scene>
  </Router>

     
  );
        };

export default RouterComponent;
