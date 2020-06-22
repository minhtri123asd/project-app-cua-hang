import React, {Component} from 'react';
import { Text, View, SafeAreaView, Image, StyleSheet, Dimensions } from 'react-native';

var {height, width} = Dimensions.get('window');

export class Checkbill extends Component{
    render (){
        return(
            <SafeAreaView style={{ flex: 1}}>
                <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                    <Image style={styles.imageHis} source={require('../assets/fuhua4.png')}/>
                </View>
            </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    imageHis:{
        width:width,
        height:height
    }
})