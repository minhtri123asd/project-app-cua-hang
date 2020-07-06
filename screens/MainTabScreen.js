import React,{Component} from 'react';
<<<<<<< HEAD

import {Home, Checkbill, Profile, EditProfile, EditPass,DetailItem,HistoryBill} from './index'
=======
import {Home, Checkbill, Profile, EditProfile, EditPass,DetailItem,ProfileContainer} from './index'
>>>>>>> e931e501d243ba7376fdd391993249019f3419a9
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import history from  '../assets/history.png'
import  {Image,View,TouchableOpacity,TouchableHighlight,Button} from  'react-native'

const navOptionHandler = () => ({
    headerShown: false
  })


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen =() => (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff"  inactiveColor="black" barStyle={{ backgroundColor: '#29998B' }}>
      <Tab.Screen name="Home" component={HomeStack} options={{tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (<Icon name="ios-home" color={color} size={26} />),}}/>
<<<<<<< HEAD
          <Tab.Screen name="Checkbill" component={Check} options={{ tabBarLabel: 'Bill',
      tabBarIcon: ({ color }) => (<Icon name="ios-timer" color={color} size={26} />),}}/>
      <Tab.Screen name="Profile" component={ProfileStack} options={{tabBarLabel: 'Profile',
=======
      <Tab.Screen name="Checkbill" component={Checkbill} options={{ tabBarLabel: 'Bill',
          tabBarIcon: ({ color }) => (<Icon name="ios-timer" color={color} size={26} />),}}/>
      <Tab.Screen name="ProfileContainer" component={ProfileStack} options={{tabBarLabel: 'Profile',
>>>>>>> e931e501d243ba7376fdd391993249019f3419a9
          tabBarIcon: ({ color }) => (<Icon name="ios-person" color={color} size={26} />),}}/>
    </Tab.Navigator>
);

export default MainTabScreen;
const StackHome = createStackNavigator();
function HomeStack() {
  return(
  <StackHome.Navigator initialRouteName='Home' screenOptions ={{headerShown: false}} >
     <StackHome.Screen name = 'Home' component ={Home} />
   
  </StackHome.Navigator>
  )
}

const StackProfile = createStackNavigator();
function ProfileStack(){
  return(
    <StackProfile.Navigator initialRouteName="ProfileContainer">
      <StackProfile.Screen name="ProfileContainer" component={Profile} options={navOptionHandler}/>
      <StackProfile.Screen name="Profile" component={Profile} options={navOptionHandler}/>
      {/* <StackProfile.Screen name="EditProfile" component={EditProfile} options={navOptionHandler}/>
      <StackProfile.Screen name="EditPass" component={EditPass} options={navOptionHandler}/> */}
    </StackProfile.Navigator>


  );
}

const CheckBills = createStackNavigator() ;
function Check() {

  return (
    <CheckBills.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName='Checkbill' >
    <CheckBills.Screen name = 'Checkbill' component={Checkbill}/>
    <CheckBills.Screen name = 'DetailItem' component= {DetailItem} />
<<<<<<< HEAD
    <CheckBills.Screen name = 'HistoryBill' component={HistoryBill} />
        </CheckBills.Navigator>
=======
    </CheckBills.Navigator>
>>>>>>> e931e501d243ba7376fdd391993249019f3419a9
  )
}

