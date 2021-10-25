import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login/login'
import Drawer from './src/pages/drawer/drawer'
import cadastroUser from './src/pages/cadastro_user/cadastroUser'

const AuthSatck = createStackNavigator();

export default function Stack() {
  return (
    <NavigationContainer>
      <AuthSatck.Navigator
        headerMode='none'
      >

        <AuthSatck.Screen name = 'cadastroUser' component={cadastroUser} />
        <AuthSatck.Screen name = 'login' component={Login} />
        <AuthSatck.Screen name = 'drawer' component={Drawer}/>

      </AuthSatck.Navigator>
    </NavigationContainer>
  );
}

