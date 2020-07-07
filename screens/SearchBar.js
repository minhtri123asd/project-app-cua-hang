import React, { Component,useState } from 'react';
import { Text, TextInput, View, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Fontisto'




export const SearchBar = () => {
    const [text,setText] =useState('')
    return (
        
            <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: '#FFFFFF',paddingRight:3 }}>
                <TouchableOpacity style={{ justifyContent: 'center' }}>
                    <Icon name='qrcode' size={30} color='black' />
                </TouchableOpacity>
                <View style={styles.searchContainer}>
                    <Icon style={styles.icon} name='search1' size={20} color='black' />
                    <TextInput style={styles.input}
                        onChangeText={(text) => setText({ text })}
                    />
                </View>
            <View style={{ flexDirection: 'row',justifyContent: 'center',alignItems:'center', margin:3}}>
                <Icon name='bells' size={20} color='black' />
                <Icon2 name='messenger' size={20} color='black' />

                </View>
            </View>





    )
}

const styles = StyleSheet.create({
  
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#888888',
        borderWidth: 1,
        marginTop: 3,
        height: 40


    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        
        paddingRight: 4



    },
    icon: {
        padding: 5,
    }
})

