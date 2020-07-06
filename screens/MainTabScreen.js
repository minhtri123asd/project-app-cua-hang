import React,{Component} from 'react';
import {Home, Checkbill, Profile, EditPass,DetailItem,ProfileContainer} from './index';
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
      <Tab.Screen name="Checkbill" component={Check} options={{ tabBarLabel: 'Orders',
          tabBarIcon: ({ color }) => (<Icon name="ios-timer" color={color} size={26} />),}}/>
      <Tab.Screen name="ProfileContainer" component={ProfileStack} options={{tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (<Icon name="ios-person" color={color} size={26} />),}}/>
    </Tab.Navigator>
);

export default MainTabScreen;

const StackProfile = createStackNavigator();
function ProfileStack(){
  return(
    <StackProfile.Navigator initialRouteName="ProfileContainer">
      <StackProfile.Screen name="ProfileContainer" component={ProfileContainer} options={navOptionHandler}/>
      <StackProfile.Screen name="Profile" component={Profile} options={navOptionHandler}/>
      {/* <StackProfile.Screen name="EditProfile" component={EditProfile} options={navOptionHandler}/>
      <StackProfile.Screen name="EditPass" component={EditPass} options={navOptionHandler}/> */}
    </StackProfile.Navigator>


  );
}

const CheckBills = createStackNavigator() ;
function Check() {
  return (
    <CheckBills.Navigator   screenOptions={{
    headerShown: false
  }}  initialRouteName='Checkbill' >
    <CheckBills.Screen name = 'Checkbill' component={Checkbill}  />
    <CheckBills.Screen name = 'DetailItem' component= {DetailItem} />
    </CheckBills.Navigator>
  )
}



