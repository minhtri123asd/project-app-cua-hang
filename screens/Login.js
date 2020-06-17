import React,{Component} from 'react';
import {Keyboard} from 'react-native'
import { SafeAreaView,
  TouchableWithoutFeedback,
      View,
      FlatList,
      StyleSheet,
      Text,
      TouchableOpacity,
      Image,
      TextInput,
      KeyboardAvoidingView} from 'react-native';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account : '',
      password: '',

    }
  }

    render() {
        const {navigation} =this.props;
    return(
      <SafeAreaView style= {styles.container}>
          <KeyboardAvoidingView behavior ='margin' style={styles.container}>
          <TouchableWithoutFeedback style ={styles.container} onPress= {Keyboard.dismiss} >
            <View style = {styles.container}>
               <View style={styles.logoContainer}>
               <Image style = {styles.logo}
                source={require('../assets/logo9.png')}/>

                </View>
                <View style = {styles.infoContainer} >
                  <Text style ={styles.title} > Account Information </Text>
                <TextInput style={styles.input}
                placeholder ="Enter username/email"
                placeholderTextColor= 'rgba(255,255,255,0.8)'
                onChangeText = {(text) => this.setState({account :text})}
                value = {this.state.account}
                keyboardType='email-address'
                returnKeyType='next'
                autoCorrect = {false}
                onSubmitEditing={()=> this.refs.txtPassword.focus()}/>
                <TextInput style={styles.input}
                ref = {'txtPassword'}
                placeholder ="Enter password"
                placeholderTextColor= 'rgba(255,255,255,0.8)'
                onChangeText = {(text) => this.setState({password :text})}
                value = {this.state.password}
                returnKeyType='go'
                autoCorrect= {false}
                secureTextEntry/>
                <TouchableOpacity style = {styles.buttonContainer}
                onPress={() => navigation.navigate('Home' )}>
                <Text style = {styles.titleButton}>SIGN IN </Text>
                </TouchableOpacity>
                </View>
            </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
          </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create ({
  container: {
    flex :1 ,
    backgroundColor: 'rgb(32,53,70)',
    flexDirection: 'column'
  },
  logoContainer: {
    position: 'absolute',
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
    top: 0,
    right: 0,
    left : 0
  },
  logo: {
    width : 300,
    height :300
  },
  title : {
    color : '#f7c744',
    fontSize:18,
    textAlign:'center',
    opacity: 0.9,
    marginBottom: 10
  },
  infoContainer: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    position: 'absolute',
    right: 0,
    left: 0,
    bottom:0,
    top:200



  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#FFF',
    paddingHorizontal : 8,
    marginBottom: 10
  },
buttonContainer: {
    backgroundColor: '#f7c744',
    paddingVertical: 15,
  },
  titleButton: {
    textAlign:'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize : 16,
    color: 'white'
    }

})
