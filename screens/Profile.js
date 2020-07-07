import React, {Component} from 'react';
import {TextInput, View, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView, Text} from 'react-native';
import Barcode from "react-native-barcode-builder";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

var {width, height} = Dimensions.get('window');

export class Profile extends Component{
  state = {
 barcode : 'this is barcode'
}
  render(){
    return(
      <ScrollView>
        <View style = {styles.container}>
          <Animatable.View
          animation="slideInDown"
           style={styles.headerContainer}>
              <View style={styles.img2}>
                <Image style={styles.img1} source={require('../assets/logo9.png')}/>
              </View>
            <View style={styles.barCode}>
              <Text style={styles.text}>Thông tin cơ bản</Text>
              <Barcode value = {this.state.barcode} height={60} width={1} textColor={'white'} background={'#009387'} lineColor={'white'} text={'01233-12313312-2312312'}/>
            </View>
          </Animatable.View>
            <Animatable.View
            animation="slideInLeft"
             style = {styles.cardContainer}>
                <View style = {styles.cardView}>

                    <View style = {styles.inCard}>
                        <TextInput style={styles.text} placeholder="Tên cửa hàng"></TextInput>
                    </View>
                    <View style = {styles.inCard}>
                        <TextInput style={styles.text} placeholder="Thời gian làm việc"></TextInput>
                    </View>
                    <View style = {styles.inCard}>
                        <TextInput style={styles.text} placeholder="Địa chỉ cửa hàng"></TextInput>
                    </View>
{/* 
                    <TouchableOpacity style = {styles.inCardOpacity}
                    onPress={() => this.props.navigation.navigate('EditProfile')}>
                      <LinearGradient colors = {['#02AAB0','#00CDAC']} style ={styles.signIn}>
                        <Text style={{fontSize:22, fontWeight: "bold"}}>Thay Đổi Thông Tin</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.inCardOpacity}
                    onPress={() => this.props.navigation.navigate('EditPass')}>
                        <Text style={{fontSize:22, fontWeight: "bold"}}>Đổi Mật Khẩu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.inCardOpacity2}
                    onPress={() => this.props.navigation.navigate('SplashScreen')}>
                        <Text style={{fontSize:22, color:'white', fontWeight:"bold" }}>Đăng Xuất</Text>
                    </TouchableOpacity> */}

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
    height: 330,
    elevation: 5,
  },
  headerContainer:{
    flexDirection:'row',
    backgroundColor:'#009387',
    borderBottomStartRadius:60,
    marginBottom:10
  },
  barCode:{

    justifyContent:'center',
    alignItems:'center',
    flex:5,},

  header:{
    backgroundColor: "rgb(32,53,70)",
    height:300,
    flex:5,
    justifyContent:'center',
    marginTop:20,
    flexDirection:'column',
  },
  img1:{
    width:100,
    height:100,
    borderRadius:90,
    justifyContent:'center',
    backgroundColor:'white'
  },
  img2:{
    height:105,
    justifyContent: 'center',
    margin:10,
    flex:3.2,
    borderRadius:90,
    alignItems:'center',
  },
  cardContainer:{
    width:width,
    height:height,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  cardView:{
    width: width - 20,
    height:470,
    margin: 10,
  },
  inCard:{
    backgroundColor:'#f7f7f7',
    borderWidth:0.5,
    borderRadius:5,
    margin:6,
    height:50,
    justifyContent:'center',
    alignItems:'center',
  },
  inCardOpacity:{
    backgroundColor:'white',
    borderWidth: 1,
    borderRadius: 6,
    margin: 6,
    alignItems:'center',
    height:40,
    justifyContent:'center',
  },
  inCardOpacity2:{
    backgroundColor:'#FA1646',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 6,
    margin: 6,
    alignItems:'center',
    height:40,
    justifyContent:'center'
  },
  text:{
    fontSize:22,
    marginLeft:10,
    fontWeight: "bold"
  },
  signIn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
},
})
