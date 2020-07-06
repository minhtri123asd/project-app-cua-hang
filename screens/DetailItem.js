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
  <Text style = {styles.priceBillDetail}>{this.props.route.params?.item.price} đ</Text>
  <Text style = {styles.finishBillDetail}>{(this.props.route.params?.item.isFinished) ? <IsFinishTrue /> : <IsFinishFalse />}</Text>
  </View>
  <View style={ styles.mInfo }>
  <View style = {styles.wrapper} >
  <Text style = {styles.textRow1}>Nguồn Tiền  </Text>
  <Text style = {styles.textRow2}>Ví Momo </Text>
  </View>
  <View style = {styles.wrapper} >
  <Text style = {styles.textRow1}>Phí Giao Dịch  </Text>
  <Text style = {styles.textRow2}>Miễn Phí </Text>
  </View>
  <View style = {styles.wrapper} >
  <Text style = {styles.textRow1}>Mã Giao Dịch  </Text>
  <Text style = {styles.textRow2}>123456789 </Text>
  </View>
  <View style = {styles.wrapper} >
  <Text style = {styles.textRow1}>Thời Gian  </Text>
  <Text style = {styles.textRow2}>2020-{this.props.route.params?.item.timeBill} </Text>
  </View>
  </View>

  <View style ={styles.mInfo2}>

  <View style = {styles.wrapper} >
  <Text style = {styles.textRow1}>Dịch Vụ </Text>
  <Text style = {styles.textRow2}>{this.props.route.params?.item.nameBill} </Text>
  </View>
  <View style = {styles.wrapper} >
  <Text style = {styles.textRow1}>Số Tiền  </Text>
  <Text style = {styles.textRow2}>{this.props.route.params?.item.price}đ</Text>
  </View>
  <View style = {styles.wrapper} >
  <Text style = {styles.textRow1}>Nguồn  </Text>
  <Text style = {styles.textRow2}>VNG Singapore </Text>
  </View>
  </View>
  </View>
)}
}
const IsFinishTrue = () =>  {
  return   <Text style = {{color : 'green'}}>Thành Công </Text>
}
const IsFinishFalse = () =>  {
  return   <Text style = {{color : 'red'}}>Thất Bại</Text>
}

 const styles = StyleSheet.create({
   container:{
     flex: 1
   },
   detailBill: {
     flex: 1/5,
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
     justifyContent: 'center'

   },
   wrapper : {
     flexDirection : 'row',
     margin: 7

   },
   textRow1: {
     flex: 1,
     color : '#9B9B9B',
     fontSize: 15
   },
   textRow2: {
     fontSize: 17
   },
   nameBillDetail : {
     fontSize: 18,
     textTransform : 'uppercase',
     marginBottom :5,
     fontWeight: '500'
   },
   priceBillDetail: {
     fontSize : 30,
     marginBottom :3,
     fontWeight:'300'
   },
   finishBillDetail: {
     fontSize: 15,
     color :'green'
   }
 })
