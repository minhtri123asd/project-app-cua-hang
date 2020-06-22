import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import Barcode from "react-native-barcode-builder";
import * as Animatable from 'react-native-animatable'; 
import LinearGradient from 'react-native-linear-gradient';

var {width, height} = Dimensions.get('window');

export class Profile extends Component{
  state = {  
    barState: 'This is Barcode'
}  
  render(){
    return(
      <ScrollView>
        <View style = {styles.container}>
          <Animatable.View
          animation="slideInDown"
           style={styles.headerContainer}>
              <View style={styles.img2}>
                <Image style={styles.img1} source={require('../assets/fuhua2.png')}/>
              </View>
            <View style={styles.barCode}>
              {/* <TouchableOpacity style={{marginRight:20, alignItems:'flex-end'}}>
                <Image style={{height:40, width:40}} source={require('../assets/scan.png')}/>
              </TouchableOpacity> */}
              <Barcode value={this.state.barState} height={60} width={1} textColor={'white'} background={'#009387'} lineColor={'white'} text={this.state.barState}/>
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
    backgroundColor:'#d6efc7'
  },
  headerContainer:{
    flexDirection:'row',
    backgroundColor:'#009387',
    borderBottomStartRadius:60,
    marginBottom:10
  },
  barCode:{
    flex:5,
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
    backgroundColor:'#d6efc7',
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
    height:40,
    justifyContent:'center'
  },
  inCardOpacity:{
    backgroundColor:'white',
    borderWidth: 1,
    borderRadius: 10,
    margin: 6,
    alignItems:'center',
    height:40,
    justifyContent:'center',
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
    fontWeight: 'bold'
  },
  signIn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
})