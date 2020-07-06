import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  View, Dimensions, Image
} from 'react-native';
var { height, width } = Dimensions.get('window');
import history from '../assets/history.png'

export class HistoryBill extends Component {
  constructor(props) {
    super(props),
      this.state = {
        data: [
          { nameBill: 'Thanh Toán Tiền Nước', timeBill: '21-6 20:39', isFinished: 'Đang xử lý', price: 220000 },
          { nameBill: 'Thanh Toán Tiền Gas', timeBill: '20-6 20:39', isFinished: 'Đang xử lý', price: 300000 },
          { nameBill: 'Thanh Toán Tiền Nước', timeBill: '21-6 20:39', isFinished: 'Đang xử lý', price: 220000 },
          { nameBill: 'Thanh Toán Tiền Gas', timeBill: '20-6 20:39', isFinished: 'Đang xử lý', price: 300000 },
          { nameBill: 'Thanh Toán Tiền Nước', timeBill: '21-6 20:39', isFinished: 'Đang xử lý', price: 220000 },
          { nameBill: 'Thanh Toán Tiền Gas', timeBill: '20-6 20:39', isFinished: 'Đang xử lý', price: 300000 },
          { nameBill: 'Thanh Toán Tiền Nước', timeBill: '21-6 20:39', isFinished: 'Đang xử lý', price: 220000 },
          { nameBill: 'Thanh Toán Tiền Gas', timeBill: '20-6 20:39', isFinished: 'Đang xử lý', price: 300000 },

        ]
      }
  }


  render() {
    return (


      <View style={{ backgroundColor: '#FFFFFF' }}>
        <FlatList
          data={this.state.data}
          extraData={this.props}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <RenderItem onpress={() => this.props.navigation.navigate('DetailItem', { item: item })} product={item} />}
        />
      </View>

    )
  }
}

const RenderItem = ({ product, onpress }) => {
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={styles.itemContainer}>
        <View style={styles.itemImageContainer}>
          <Image style={styles.itemImage} source={require('../assets/money.png')} />
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}> {product.nameBill}</Text>
          <Text style={styles.itemTime}>🕘:  {product.timeBill} </Text>
          <View style={styles.wrapper} >
            <Text style={styles.itemFinish}>{product.isFinished} </Text>
            <Text style={styles.itemPrice}> {product.price} đ</Text>
          </View>
        </View>

      </View>
    </TouchableOpacity>)
}
const IsFinishTrue = () => {
  return <Text style={{ color: 'green' }}>Thành Công </Text>
}
const IsFinishFalse = () => {
  return <Text style={{ color: 'red' }}>Thất Bại</Text>
}


const styles = StyleSheet.create({
  itemContainer: {
    padding: 5,
    flexDirection: 'row',

    margin: 7
  },
  itemImageContainer: {
    justifyContent: 'center',
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemInfo: {
    marginLeft: 10,
    flexDirection: 'column',
    flex: 1
  },
  itemName: {
    fontSize: 15,
    fontWeight: '700'
  },
  itemTime: {
    color: '#C4BDBD'
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemFinish: {
    flex: 1,
    fontSize: 12,
    marginLeft: 2
  },
  itemPrice: {
    fontWeight: '700',
  }

})
