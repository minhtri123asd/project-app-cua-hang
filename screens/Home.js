import  React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {BackgroundCarousel} from '../components/BackgroundCarousel';
import * as Animatable from 'react-native-animatable';

var {height, width} = Dimensions.get('window');
const images = [
  'https://em.wattpad.com/4f1da9c5618b930d8047c1984b5c179b612b9360/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f58684279486e5772707743487a413d3d2d3639333339313533332e313538316463383362343030366538363430313731343435363432362e6a7067?s=fit&w=720&h=720',
  'https://em.wattpad.com/60a0bd51dcb8f059b8ac9429de4566b208965fa0/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4f47436f38776435655979347a413d3d2d3639333339313533332e313538316463386432653236376531343334363638313436313530312e706e67?s=fit&w=720&h=720',
  'https://i.pinimg.com/736x/47/64/6c/47646cf3c353eba5110754c7015bff3a.jpg',
  'https://gamepedia.cursecdn.com/honkaiimpact3_gamepedia_en/c/c1/Phoenix.png?version=4d4467c5bb2cfea23c93b36d39babd62',
  'https://preview.redd.it/0rtgukbbq9z31.jpg?width=1024&format=pjpg&auto=webp&s=71b6d46c852808681538bb7e79976948f74d9212',
];

export class Home extends Component{
  render(){
    return(
      <Animatable.View animation="lightSpeedIn" style={styles.container}>
        <BackgroundCarousel images={images} />
      </Animatable.View>

    )
  }
}


const styles = StyleSheet.create({
  container:{
    width: '95%',
    height: height / 4,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    justifyContent:'center',
    alignItems:'center',
  }
})
