import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import {Profile} from './Profile';


var {width, height} = Dimensions.get('window');

export class ProfileContainer extends Component{
    render(){
      return(
        <View style={styles.container}>
            <View style={styles.profile1}>
                <Profile></Profile>
            </View>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: width,
      height: 680,
      elevation: 5,
    },
    profile1:{
        flex:1/2
    }
})