import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CheckBillScreen from './Checkbill'
import ProfileScreen from './Profile'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}


const Tab = createMaterialBottomTabNavigator();

 export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name ="Profile" component={ProfileScreen}/>
      <Tab.Screen name="CheckBill" component={CheckBillScreen} />
</Tab.Navigator>
  );
}
