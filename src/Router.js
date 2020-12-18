import React from 'react';
import {Scene, Stack, Router} from 'react-native-router-flux';
import {View, Text} from 'react-native';

// SCENES
import Initial from './scenes/Initial';
import Login from './scenes/Login';
 import ResetPassword from './scenes/ResetPassword';


const RouterComponent = () => {

  return (
    <Router>
      <Stack key="root" >
        {/* AUTORIZATION */}
        <Scene key="Initial" component={Initial} initial hideNavBar/>
        <Scene key="Login" component={Login} hideNavBar />
        <Scene key="ResetPassword" component={ResetPassword} hideNavBar />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
