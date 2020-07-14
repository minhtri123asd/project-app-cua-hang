import React,{Component} from 'react';
import {Home, Checkbill, DetailItem} from './index'
import Profile from '../screens/Profiles/Profile'
import ProfileDetail from '../screens/Profiles/ProfileDetail'
import ProfileEdit from '../screens/Profiles/ProfileEdit'
import ProfileEditPass from '../screens/Profiles/ProfileEditPass'
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
      <Tab.Screen name="Checkbill" component={Check} options={{ tabBarLabel: 'Orders',
          tabBarIcon: ({ color }) => (<Icon name="ios-timer" color={color} size={26} />),}}/>
      <Tab.Screen name="Profile" component={ProfileStack} options={{tabBarLabel: 'Profile',
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
    <StackProfile.Navigator initialRouteName="Profile">
        <StackProfile.Screen name="Profile" component={Profile} options={navOptionHandler}/>
        <StackProfile.Screen name="ProfileDetail" component={ProfileDetail} options={navOptionHandler}/>
        <StackProfile.Screen name="ProfileEdit" component={ProfileEdit} options={navOptionHandler}/>
        <StackProfile.Screen name="ProfileEditPass" component={ProfileEditPass} options={navOptionHandler}/>
    </StackProfile.Navigator>


  );
}

const CheckBills = createStackNavigator() ;
function Check() {

  return (
    <CheckBills.Navigator initialRouteName='Checkbill' >
      <CheckBills.Screen name = 'Checkbill' component={Checkbill} options={{title:'Đơn hàng',headerTintColor:'white', headerStyle:{backgroundColor:'#009387'}}}/>
      <CheckBills.Screen name = 'DetailItem' component= {DetailItem} options={{title:'Chi tiết đơn hàng',headerTintColor:'white', headerStyle:{backgroundColor:'#009387'}}}/>
    </CheckBills.Navigator>
  )
}



