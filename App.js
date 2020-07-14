import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabScreen from './screens/MainTabScreen';
import SplashScreen from './screens/Login/SplashScreen'
import SignInScreen from './screens/Login/SignInScreen'
import SignUpScreen from './screens/Login/SignUpScreen'
import FGPassScreen from './screens/Login/FGPassScreen'
import FGDetail from './screens/Login/FGDetail'
import FGEdit from './screens/Login/FGEdit'
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
        <Stack.Screen name="FGPassScreen" component={FGPassScreen} options={{title:'Quên mật khẩu',headerTintColor:'white', headerStyle:{backgroundColor:'#009387'}}}/>
        <Stack.Screen name="FGDetail" component={FGDetail} options={{title:'',headerTintColor:'white', headerStyle:{backgroundColor:'#009387'}}}/>
        <Stack.Screen name="FGEdit" component={FGEdit} options={{title:'',headerTintColor:'white', headerStyle:{backgroundColor:'#009387'}}}/>
        <Stack.Screen name="Home" component={MainTabScreen} options={navOptionHandler} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
