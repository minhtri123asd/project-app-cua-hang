import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,Dimensions
} from 'react-native';


export default class ProfileScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.avatar} source={{uri: 'https://st.quantrimang.com/photos/image/072015/22/avatar.jpg'}}/>
              <Text style={styles.name}>Mr John</Text>
          </View>

      <View style = {styles.body} >
      <View style ={styles.content1}>
      <Text style = {styles.textView}> Username </Text>
      <Text style = {styles.textInfo}> John</Text>
      </View>
      <View style = {styles.content1} >
      <Text style = {styles.textView}> Email </Text>
      <Text style = {styles.textInfo}> trinmps08368@fpt.edu.vn</Text>
      </View>
        <View style = {styles.content1} >
      <Text style = {styles.textView}> Phone </Text>
      <Text style = {styles.textInfo}> 0123-234-456</Text>
      </View>
        <View style = {styles.content1} >
      <Text style = {styles.textView}> Gender </Text>
      <Text style = {styles.textInfo}> Male</Text>
      </View>
        <View style = {styles.content1} >
      <Text style = {styles.textView}> Date Of Birth </Text>
      <Text style = {styles.textInfo}> 05/04/1998</Text>
      </View>
      </View>




      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#1C1C1C",
    height:300,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'

  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
},
  name:{
    fontSize:15,
    color:"white",
    fontWeight:'bold',
  },


  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  textView: {
    color: '#888888',
    paddingBottom : 10
  },
  container: {
    backgroundColor: '#F8F8FF',
    flex:1
  },
  body : {
    backgroundColor:'#F8F8FF',
    margin :20
  },
  textInfo: {
    marginBottom : 5,

    fontWeight:'bold',
    fontSize: 15
  },
  content1: {
    borderBottomWidth : 1,
    borderBottomColor : '#888888',
    marginBottom: 4
  }



});
