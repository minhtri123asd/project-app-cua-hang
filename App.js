import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login'
import MainTabScreen from './screens/MainTabScreen';
import SplashScreen from './login/SplashScreen'
import SignInScreen from './login/SignInScreen'
import SignUpScreen from './login/SignUpScreen'
import {createStore} from 'redux'
//state


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
   headerShown: false
 }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <Stack.Screen name="Home" component={MainTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
