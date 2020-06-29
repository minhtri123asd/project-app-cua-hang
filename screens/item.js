// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Platform,
//   TextInput,
//   Text,
//   TouchableOpacity,
//   FlatList,
//   View,Dimensions,Image
// } from 'react-native';
// var {height, width} = Dimensions.get('window');
// export default class Checkbill extends Component {
//   constructor(props) {
//     super(props),
//     this.state = {
//       data: [
//         {nameBill: 'Thanh Toán Tiền Nước' , timeBill: '21/6 - 20:39' , isFinished : true, price: 220000},
//         {nameBill: 'Thanh Toán Tiền Nước' , timeBill: '21/6 - 20:39' , isFinished : false, price: 220000},
//         {nameBill: 'Thanh Toán Tiền Nước' , timeBill: '21/6 - 20:39' , isFinished : false, price: 400000},
//         {nameBill: 'Thanh Toán Tiền Nước' , timeBill: '21/6 - 20:39' , isFinished : true, price: 300000}
//
//       ]
//     }
//   }
//   render() {
//     return (
//       <View>
//       <FlatList
//             data={this.state.data}
//             extraData={this.props}
//             keyExtractor={ (item, index) => index }
//             renderItem={ ({item}) => <RenderItem product = {item} /> }
//           />
//       </View>
//     )
//   }
// }
//
//  const RenderItem = ({product}) => {
//    return (
//   <View style= {styles.itemContainer}>
//   <View style= {styles.itemImageContainer}>
//   <Image  style = {styles.itemImage}   source={require('../assets/money.png')} />
//   </View>
//
//     <View style = {styles.itemInfo}>
//     <Text style = {styles.itemName}> {product.nameBill}</Text>
//     <Text style= {styles.itemTime}> Time : {product.timeBill} </Text>
//     <Text style = {styles.itemFinish}> { (product.isFinished) ? `✅` : `🕘` } </Text>
//     <Text style = {{position : 'absolute' ,top : 39 , right: -140, fontWeight:'bold'}}> {product.price}</Text>
//     </View>
//
//   </View>)
// }
// const styles= StyleSheet.create({
//   itemContainer: {
//     padding : 5,
//     flexDirection: 'row',
//
//     margin: 7
//   },
//   itemImageContainer: {
//     justifyContent: 'center',
// },
//   itemImage: {
//     width : 50,
//     height :50,
//   },
//   itemInfo: {
//     marginLeft : 10,
//     flexDirection:'column',
//   },
//   itemName :{
//     fontSize :15,
//     fontWeight: '700'
//   },
//   itemTime: {
//     color: '#C4BDBD'
//   },
//   itemFinish: {
//     fontSize: 13
//   }
//
// })
