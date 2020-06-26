import React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable'; 

var {width, height} = Dimensions.get('window');

export class EditProfile extends Component{
    render(){
        return(
          <ScrollView>
            <View style = {styles.container}>
                <TouchableOpacity>
                  <Animatable.View animation="fadeInDown" style={styles.img2}>
                      <Image style={styles.img1} source={require('../assets/fuhua3.png')}/>
                  </Animatable.View>
                </TouchableOpacity>
                <Animatable.View animation="fadeInUpBig" style = {styles.cardContainer}>
                    <View style = {styles.cardView}>
                        <View style = {styles.inCard}>
                            <TextInput style={styles.text} placeholder="Tên cửa hàng:"></TextInput>
                        </View>
                        <View style = {styles.inCard}>
                            <TextInput style={styles.text} placeholder="Họ và Tên:"></TextInput>
                        </View>
                        <View style = {styles.inCard}>
                            <TextInput style={styles.text} placeholder="Email:"></TextInput>
                        </View>
                        <View style = {styles.inCard}>
                            <TextInput style={styles.text} placeholder="Số điện thoại:"></TextInput>
                        </View>
                        <View style = {styles.inCard}>
                            <TextInput style={styles.text} placeholder="Địa chỉ:"></TextInput>
                        </View>
                        
                        <TouchableOpacity style = {styles.inCardOpacity}
                        onPress={() => this.props.navigation.navigate('Profile')}>
                            <Text style={{fontSize:22, fontWeight:"bold"}}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.inCardOpacity2}
                        onPress={() => this.props.navigation.goBack()}>
                            <Text style={{fontSize:22, color:'white', fontWeight:"bold"}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
          </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: 680,
    elevation: 5,
    backgroundColor:'#d6efc7',
    alignItems:'center',
  },
  img1:{
    width:140,
    height:140,
    borderRadius:90,
    justifyContent:'center',
    backgroundColor:'white'
    },
  img2:{
    height: 150,
    width:150,
    alignItems:'center',
    justifyContent: 'center',
    marginTop:20,
    marginBottom:20,
    backgroundColor:'black',
    borderRadius:90,
    alignItems:'center',
},
  cardContainer:{
    width:width,
    height:height,
    backgroundColor:'#d6efc7',
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  cardView:{
    width: width - 20,
    height:415,
    margin: 10,
  },
  inCard:{
      backgroundColor:'#f7f7f7',
      borderWidth:1,
      borderRadius:5,
      margin:6,
      height:50
  },
  inCardOpacity:{
    backgroundColor:'white',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    margin: 6,
    alignItems:'center',
    height:40,
    justifyContent:'center'
  },
  inCardOpacity2:{
    backgroundColor:'#FA1646',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    margin: 6,
    alignItems:'center',
    height:40,
    justifyContent:'center'
  },
  text:{
    fontSize:22,
    marginLeft:10,
    fontWeight:"bold"
  }
})