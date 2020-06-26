import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import Barcode from "react-native-barcode-builder";
import * as Animatable from 'react-native-animatable';

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

              <Barcode value = {this.state.barcode} height={60} width={1} textColor={'white'} background={'#009387'} lineColor={'white'} text={'01233-12313312-2312312'}/>
            </View>
          </Animatable.View>
            <Animatable.View
            animation="slideInLeft"
             style = {styles.cardContainer}>
                <View style = {styles.cardView}>

                    <View style = {styles.inCard}>
                        <Text style={styles.text}>Tên cửa hàng:</Text>
                    </View>
                    <View style = {styles.inCard}>
                        <Text style={styles.text}>Họ và Tên:</Text>
                    </View>
                    <View style = {styles.inCard}>
                        <Text style={styles.text}>Email:</Text>
                    </View>
                    <View style = {styles.inCard}>
                        <Text style={styles.text}>Số điện thoại:</Text>
                    </View>
                    <View style = {styles.inCard}>
                        <Text style={styles.text}>Địa chỉ:</Text>
                    </View>
                    <View style = {styles.inCard}>
                        <Text style={styles.text}>Loại tài khoản:</Text>
                    </View>

                    <TouchableOpacity style = {styles.inCardOpacity}
                    onPress={() => this.props.navigation.navigate('EditProfile')}>
                        <Text style={{fontSize:22, fontWeight: "bold"}}>Thay Đổi Thông Tin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.inCardOpacity}
                    onPress={() => this.props.navigation.navigate('EditPass')}>
                        <Text style={{fontSize:22, fontWeight: "bold"}}>Đổi Mật Khẩu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.inCardOpacity2}
                    onPress={() => this.props.navigation.navigate('SplashScreen')}>
                        <Text style={{fontSize:22, color:'white', fontWeight:"bold" }}>Đăng Xuất</Text>
                    </TouchableOpacity>

                </View>
            </Animatable.View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
// <<<<<<< HEAD
  container: {
    flex: 1,
    width: width,
    height: 680,
    elevation: 5,
    backgroundColor:'white'
  },
  headerContainer:{
    flexDirection:'row',
    backgroundColor:'#009387',
    borderBottomStartRadius:60,
    marginBottom:10
  },
  barCode:{
    flex:5,},

  header:{
    backgroundColor: "rgb(32,53,70)",
    height:300,

    justifyContent:'center',
    marginTop:20,
    flexDirection:'column',
  },
  img1:{
    width:140,
    height:140,
    borderRadius:90,
    justifyContent:'center',
    backgroundColor:'white'
  },
  img2:{
    height:145,
    justifyContent: 'center',
    margin:10,
    flex:3.2,
    borderRadius:90,
    backgroundColor:'black',
    alignItems:'center',
  },
  cardContainer:{
    width:width,
    height:height,
    backgroundColor:'white',
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  cardView:{
    width: width - 20,
    height:470,
    backgroundColor: '#009387',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  inCard:{
    backgroundColor:'rgba(254,235,208,0.5)',
    borderColor:'blue',
    borderWidth:1,
    borderRadius:5,
    margin:6,
    height:40,
    justifyContent:'center'
  },
  inCardOpacity:{
    backgroundColor:'white',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    margin: 6,
    alignItems:'center',
    height:40,
    justifyContent:'center'
  },
  inCardOpacity2:{
    backgroundColor:'#FA1646',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    margin: 6,
    alignItems:'center',
    height:40,
    justifyContent:'center'
  },
  text:{
    fontSize:22,
    marginLeft:10,
    fontWeight: "bold"}
})
