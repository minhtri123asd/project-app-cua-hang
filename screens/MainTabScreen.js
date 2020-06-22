import React,{Component} from 'react';

import {Home, Checkbill, Profile, EditProfile, EditPass} from './index'
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const navOptionHandler = () => ({
    headerShown: false
  })  

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen =() => (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff"  inactiveColor="black" barStyle={{ backgroundColor: '#29998B' }}>
      <Tab.Screen name="Home" component={Home} options={{tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (<Icon name="ios-home" color={color} size={26} />),}}/>
      <Tab.Screen name="Checkbill" component={Checkbill} options={{ tabBarLabel: 'CheckBill',
          tabBarIcon: ({ color }) => (<Icon name="ios-timer" color={color} size={26} />),}}/>
      <Tab.Screen name="Profile" component={ProfileStack} options={{tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (<Icon name="ios-person" color={color} size={26} />),}}/>
    </Tab.Navigator>
);

export default MainTabScreen;

const StackProfile = createStackNavigator();
function ProfileStack(){
  return(
    <StackProfile.Navigator initialRouteName="Profile">
      <StackProfile.Screen name="Profile" component={Profile} options={navOptionHandler}/>
      <StackProfile.Screen name="EditProfile" component={EditProfile} options={navOptionHandler}/>
      <StackProfile.Screen name="EditPass" component={EditPass} options={navOptionHandler}/>
    </StackProfile.Navigator>
  );
}