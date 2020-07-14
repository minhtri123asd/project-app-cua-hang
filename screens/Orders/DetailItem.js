import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  View,Dimensions,Image
} from 'react-native';

export class  DetailItem extends Component {

  render(){

  return (
  <View style = {styles.container}>
    <View style = {styles.detailBill} >
      <Text style = {styles.nameBillDetail}>{this.props.route.params?.item.nameBill}</Text>
      <Text style = {styles.priceBillDetail}>{this.props.route.params?.item.price}</Text>
      <Text style = {styles.finishBillDetail}>{(this.props.route.params?.item.isFinished) ? <IsFinishTrue /> : <IsFinishFalse/>}</Text>
    </View>
    <View style={ styles.mInfo }>
      <View style = {styles.wrapper} >
        <Text style = {styles.textRow1}>Khách hàng  </Text>
        <Text style = {styles.textRow2}>{this.props.route.params?.item.nameUser}</Text>
      </View>
      <View style = {styles.wrapper} >
        <Text style = {styles.textRow1}>Điện thoại</Text>
        <Text style = {styles.textRow2}>{this.props.route.params?.item.phoneUser} </Text>
      </View>
      <View style = {styles.wrapper} >
        <Text style = {styles.textRow1}>Thời Gian  </Text>
        <Text style = {styles.textRow2}>2020-{this.props.route.params?.item.timeBill} </Text>
      </View>
      <View style = {styles.wrapper} >
        <Text style = {styles.textRow1}>Địa chỉ  </Text>
        <Text style = {styles.textRow2}>{this.props.route.params?.item.adressUser}</Text>
      </View>
    </View>


    <View style ={styles.mInfo2}>
      <View style = {styles.wrapper} >
        <Text style = {styles.textRow1}>{this.props.route.params?.item.service1} </Text>
        <Text style = {styles.textRow1}>{this.props.route.params?.item.amount1} </Text>
        <Text style = {styles.textRow3}>{this.props.route.params?.item.price1} </Text>
      </View>
      <View style = {styles.wrapper2} >
        <Text style = {styles.textRow1}>{this.props.route.params?.item.service2} </Text>
        <Text style = {styles.textRow1}>{this.props.route.params?.item.amount2} </Text>
        <Text style = {styles.textRow3}>{this.props.route.params?.item.price2} </Text>
      </View>
      <View style={{borderBottomWidth:1, width:'90%', marginLeft:'5%'}}></View>
      <View style = {styles.wrapper} >
        <Text style = {styles.textRow1}>Tổng tiền</Text>
        <Text style = {styles.textRow3}>{this.props.route.params?.item.price}</Text>
      </View>
    </View>
    <View style={{alignItems:'center'}}>
      <TouchableOpacity style = {styles.inCardOpacity2}
        onPress={() => this.props.navigation.goBack()}>
          <Text style={{fontSize:22, color:'white', fontWeight:"bold"}}>{(this.props.route.params?.item.isFinished2) ? <IsFinishTrue2 /> : <IsFinishFalse2/>}</Text>
      </TouchableOpacity>
    </View>

  </View>
)}
}

const IsFinishTrue = () => {
  return <Text style={{color: 'green'}}>Đã xác nhận</Text>
}

const IsFinishFalse = () => {
  return <Text style={{color: 'red'}}>Đang xử lý</Text>
}

const IsFinishTrue2 = () => {
  return <Text>Đã thanh toán</Text>
}

const IsFinishFalse2 = () => {
  return <Text>Thanh toán</Text>
}

 const styles = StyleSheet.create({
   container:{
     flex: 1,
   },
   detailBill: {
     flex: 1.2/5,
     alignItems : 'center',
     backgroundColor: '#FFFFFF',
     justifyContent: 'center',
     borderColor : '#D9D9D9',
     borderWidth:1

   },
   mInfo :{
     flex : 1.5/5,
     marginTop: 40,
     backgroundColor: '#FFFFFF',
     borderColor : '#D9D9D9',
     borderWidth:1,
     justifyContent: 'center'
   },
   mInfo2 : {
     flex : 1.2/5,
     marginTop: 40,
     backgroundColor: '#FFFFFF',
     borderColor : '#D9D9D9',
     borderWidth:1,
     justifyContent: 'center',

   },
   wrapper : {
     flexDirection : 'row',
     margin: 7,
   },
   wrapper2 : {
    flexDirection : 'row',
    margin: 7,
  },
   textRow1: {
     flex: 1,
     color : '#9B9B9B',
     fontSize: 15,
     fontWeight:'bold'
   },
   textRow2: {
     fontSize: 17,
     fontWeight:'bold'
   },
   textRow3: {
    fontSize: 17,
    color:'red',
    fontWeight:'bold'
  },
   nameBillDetail : {
     fontSize: 20,
     textTransform : 'uppercase',
     marginBottom :5,
     fontWeight:'bold'
   },
   priceBillDetail: {
     fontSize : 30,
     marginBottom :3,
     fontWeight:'300'
   },
   finishBillDetail: {
     fontSize: 15,
     color :'green'
   },
   inCardOpacity2:{
    backgroundColor:'#009387',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 6,
    margin: 6,
    alignItems:'center',
    height:45,
    justifyContent:'center',
    marginTop:20,
    width:200
  }
 })
