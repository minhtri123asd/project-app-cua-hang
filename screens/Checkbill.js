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
var {height, width} = Dimensions.get('window');

export class Checkbill extends Component {
  constructor(props) {
    super(props),
    this.state = {
      data: [
        {nameBill: 'Thanh Toán Tiền Nước' , timeBill: '6-21 20:39' , isFinished :true, isFinished2 :true, price: '220.000đ', phoneUser: '0983815828', nameUser: 'Nguyễn Văn A', adressUser: '117 Cống Quỳnh, Nguyễn Cư Trinh, Q1', service1: 'Nước suối', price1: '110.000đ', amount1: 'x2'},
        {nameBill: 'Thanh Toán Tiền Gas' , timeBill: '6-20 08:32' , isFinished : false, isFinished2 :false, price: '700.000đ', phoneUser: '0983815828', nameUser: 'Nguyễn Văn A', adressUser: '117 Cống Quỳnh, Nguyễn Cư Trinh, Q1', service1: 'Gas xám', service2: 'Gas gia đình', price1: '120.000đ', price2: '180.000đ', amount1: 'x2', amount2: 'x2'},
        {nameBill: 'Thanh Toán Tiền Wifi' , timeBill: '6-30 07:59' , isFinished : true, isFinished2 :true, price: '400.000đ', phoneUser: '0983815828', nameUser: 'Nguyễn Văn A', adressUser: '117 Cống Quỳnh, Nguyễn Cư Trinh, Q1', service1: 'Tiền wifi tháng 6', price1: '400.000đ', amount1: 'x1'},
        {nameBill: 'Thanh Toán Tiền Điện' , timeBill: '7-1 11:39' , isFinished : true, isFinished2 :true, price: '660.000đ', phoneUser: '0983815828', nameUser: 'Nguyễn Văn A', adressUser: '117 Cống Quỳnh, Nguyễn Cư Trinh, Q1', service1: 'Tiền điện tháng 6', price1: '660.000đ', amount1: 'x1'},
        {nameBill: 'Thanh Toán Tiền Nước' , timeBill: '7-1 16:42' , isFinished :true, isFinished2 :true, price: '220.000đ', phoneUser: '0983815828', nameUser: 'Nguyễn Văn A', adressUser: '117 Cống Quỳnh, Nguyễn Cư Trinh, Q1', service1: 'Nước lọc', service2: 'Nước ngọt', price1: '40.000đ', price2: '100.000đ', amount1: 'x3', amount2: 'x10'},
        {nameBill: 'Thanh Toán Tiền Gas' , timeBill: '7-2 22:30' , isFinished : false, isFinished2 :false, price: '300.000đ', phoneUser: '0983815828', nameUser: 'Nguyễn Văn A', adressUser: '117 Cống Quỳnh, Nguyễn Cư Trinh, Q1', service1: 'Gas gia đình', service2: 'Gas xám', price1: '200.000đ', price2: '100.000đ', amount1: 'x1', amount2: 'x1'},
        {nameBill: 'Thanh Toán Tiền Wifi' , timeBill: '7-13 22:31' , isFinished : true, isFinished2 :true, price: '400.000đ', phoneUser: '0983815828', nameUser: 'Nguyễn Văn A', adressUser: '117 Cống Quỳnh, Nguyễn Cư Trinh, Q1', service1: 'Tiền wifi tháng 6', price1: '400.000đ', amount1: 'x1'},
        {nameBill: 'Thanh Toán Tiền Điện' , timeBill: '7-14 18:38' , isFinished : true, isFinished2 :true, price: '660.000đ', phoneUser: '0983815828', nameUser: 'Nguyễn Văn A', adressUser: '117 Cống Quỳnh, Nguyễn Cư Trinh, Q1', service1: 'Tiền điện tháng 6', price1: '660.000đ', amount1: 'x1'},
        {nameBill: 'Thanh Toán Tiền Hoa' , timeBill: '7-14 20:32' , isFinished : true, isFinished2 :true, price: '710.000đ', phoneUser: '0983815828', nameUser: 'Nguyễn Văn A', adressUser: '117 Cống Quỳnh, Nguyễn Cư Trinh, Q1', service1: 'Hoa hồng', service2: 'Hoa cúc trắng', price1: '50.000đ', price2: '30.000đ', amount1: 'x10', amount2: 'x7'},
        

      ]
    }
  }


  render() {
    return (
      <View>
        <FlatList
            data={this.state.data}
            extraData={this.props}
            keyExtractor={ (item, index) => index }
            renderItem={ ({item}) => <RenderItem onpress = {() => this.props.navigation.navigate('DetailItem',{item :item} )}  product = {item} /> }
          />
      </View>
    )
  }
}

  const RenderItem = ({product,onpress}) => {
   return (
    <TouchableOpacity onPress = {onpress}>
      <View style= {styles.itemContainer}>
        <View style= {styles.itemImageContainer}>
          <Image  style = {styles.itemImage}   source={require('../assets/money.png')} />
        </View>
        <View style = {styles.itemInfo}>
          <Text style = {styles.itemName}> {product.nameBill}</Text>
          <Text style= {styles.itemTime}>🕘:  {product.timeBill} </Text>
          <View style = {styles.wrapper} >
            <Text style = {styles.itemFinish}> {(product.isFinished) ? <IsFinishTrue /> : <IsFinishFalse/>} </Text>
            <Text style = {styles.itemPrice}> {product.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
    )
  }

const IsFinishTrue = () => {
  return <Text style={{color: 'green'}}>Đã xác nhận</Text>
}

const IsFinishFalse = () => {
  return <Text style={{color: 'red'}}>Đang xử lý</Text>
}

const styles= StyleSheet.create({
  itemContainer: {
    padding : 5,
    flexDirection: 'row',
    borderBottomWidth:1
  },
  itemImageContainer: {
    justifyContent: 'center',
  },
  itemImage: {
    width : 50,
    height :50,
  },
  itemInfo: {
    marginLeft : 10,
    flexDirection:'column',
    flex:1,
    marginTop:7,
    marginBottom:7
    
  },
  itemName :{
    fontSize :15,
    fontWeight: '700'
  },
  itemTime: {
    color: '#C4BDBD'
  },
  wrapper : {
    flexDirection:'row',
  alignItems:'center',
  },
  itemFinish: {
    flex:1,
    fontSize:12
  },
  itemPrice : {
    fontWeight:'700',
  }

})
