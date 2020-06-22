import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login'
import MainTabScreen from './screens/MainTabScreen';
import {createStore} from 'redux'
//state
let appState = {
  number : 1,histories : [1]
}
//action
const add = {
  type : 'ADD',
  value:1
}
const sub ={
  type: 'SUB',
  value : 1
}

//reducer

const numberReducer =(state , action ) => {
  switch (action.type) {
    case 'ADD':
    const newValue =  state.number + action.value;
    state = {
      ...state,
      histories: [...state.histories , newValue ],
      number :newValue
    }

      break;
    case 'SUB':
    const newVal =  state.number + action.value;
    state = {
      ...state,
      histories: [...state.histories , newVal ],
      number :newVal
    }

    default:

  }
  return state;
}
//store
const store = createStore(numberReducer,appState);
store.subscribe( () => {
  console.log('State update' ,store.getState())
})
store.dispatch(add);
store.dispatch(add);
store.dispatch(add);
store.dispatch(add);


const createNewState = (number) =>
{
  return {type : 'ADD'  , value : number}
}
store.dispatch(createNewState(10))



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
   headerShown: false
 }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={MainTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
