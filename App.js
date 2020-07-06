import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login'
import MainTabScreen from './screens/MainTabScreen';
import SplashScreen from './login/SplashScreen'
import SignInScreen from './login/SignInScreen'
import SignUpScreen from './login/SignUpScreen'
import FGPassScreen from './login/FGPassScreen'
import FGDetail from './login/FGDetail'
import FGEdit from './login/FGEdit'
import {createStore} from 'redux'
import { color } from 'react-native-reanimated';
//state

const navOptionHandler = () => ({
  headerShown: false,
  
})



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={navOptionHandler}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={navOptionHandler}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={navOptionHandler}/>
        <Stack.Screen name="FGPassScreen" component={FGPassScreen} options={{title:'Quen mat khau',headerTintColor:'white', headerStyle:{backgroundColor:'#009387'}}}/>
        <Stack.Screen name="FGDetail" component={FGDetail} options={{title:'',headerTintColor:'white', headerStyle:{backgroundColor:'#009387'}}}/>
        <Stack.Screen name="FGEdit" component={FGEdit} options={{title:'',headerTintColor:'white', headerStyle:{backgroundColor:'#009387'}}}/>
        <Stack.Screen name="Home" component={MainTabScreen} options={navOptionHandler} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
