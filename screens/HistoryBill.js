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
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Fontisto';

var { height, width } = Dimensions.get('window');
import history from '../assets/history.png'

export class Checkbill extends Component {
  constructor(props) {
    super(props),
      this.state = {
        data: [
          { nameBill: 'Thanh Toán Tiền Nước', timeBill: '21-6 20:39', isFinished: true, price: 220000 },
          { nameBill: 'Thanh Toán Tiền Gas', timeBill: '20-6 20:39', isFinished: true, price: 300000 },
          { nameBill: 'Thanh Toán Tiền Wifi', timeBill: '30-6 20:39', isFinished: true, price: 400000 },
          { nameBill: 'Thanh Toán Tiền Điện', timeBill: '11-6 20:39', isFinished: true, price: 660000 },
          { nameBill: 'Thanh Toán Tiền Nước', timeBill: '21-6 20:39', isFinished: true, price: 220000 },
          { nameBill: 'Thanh Toán Tiền Nước', timeBill: '21-6 20:39', isFinished: true, price: 220000 },
          { nameBill: 'Thanh Toán Tiền Gas', timeBill: '20-6 20:39', isFinished: true, price: 300000 },
          { nameBill: 'Thanh Toán Tiền Wifi', timeBill: '30-6 20:39', isFinished: true, price: 400000 },
          { nameBill: 'Thanh Toán Tiền Điện', timeBill: '11-6 20:39', isFinished: true, price: 660000 },
          { nameBill: 'Thanh Toán Tiền Nước', timeBill: '21-6 20:39', isFinished: true, price: 220000 }

        ]
      }
  }


  render() {
    return (
      <View>
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#FFFFFF',
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5, },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
          borderColor: 'black',
          borderWidth: 0.5,
          borderRadius: 3,
        }}>
          <View style={{ justifyContent: 'center', flex: 1, marginLeft: 10 }}>
            <Text style={{ fontWeight: '700' }}>Thanh Toán Thành Công</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HistoryBill')} style={{ margin: 4, paddingRight: 10, backgroundColor: '#FFFFFF' }} >
            <Icon name='history' size={30} color='black' />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: '#FFFFFF' }}>
          <FlatList
            data={this.state.data}
            extraData={this.props}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <RenderItem onpress={() => this.props.navigation.navigate('DetailItem', { item: item })} product={item} />}
          />
        </View>
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
            <Text style={styles.itemFinish}> {(product.isFinished) ? <IsFinishTrue /> : <IsFinishFalse />} </Text>
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
    fontSize: 12
  },
  itemPrice: {
    fontWeight: '700',
  }

})
