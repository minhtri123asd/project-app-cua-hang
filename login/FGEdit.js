import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    Image
   
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const SignInScreen = ({navigation}) => {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        confim_password:'',
        check_textInputChange: false,
        secureTextEntry: true,
        confim_secureTextEntry: true,
    });
    const handlePasswordChange = (val) => {
              setData({
                  ...data,
                  password: val
              });
    }
    const handleConfimPasswordChange = (val) => {
        setData({
            ...data,
            confim_password: val
        });
}
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: ! data.secureTextEntry
        });
    }
    const updateConfimSecureTextEntry = () => {
        setData({
            ...data,
            confim_secureTextEntry: !data.confim_secureTextEntry
        });
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.img1} source={require('../assets/logo9.png')}/>
        </View>
        <View style={styles.footer}>   
            <Text style ={styles.text_header}>Nhập mật khẩu mới cho tài khoản</Text>
            <Text style ={styles.text_footer}>Mật khẩu mới của bạn phải khác với</Text>
            <Text style ={styles.text_footer2}>mật khẩu trước đó</Text>

            <View style={styles.action}>
                <View style={styles.textInput}>
                    <FontAwesome5 name ="lock" color ="#05375a" size ={20}/>
                    <TextInput placeholder ="Mật khẩu mới" style={styles.textInput2}
                    secureTextEntry ={data.secureTextEntry ? true : false}
                    onChangeText={(val) => handlePasswordChange(val)}
                    autoCapitalize ="none"
                    />
                    <TouchableOpacity onPress ={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                        <FontAwesome5 name ="eye-slash" color ="grey" size={20}/>
                            :
                        <FontAwesome5 name ="eye" color ="grey" size={20}/>}
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.action}>
                <View style={styles.textInput}>
                    <FontAwesome5 name ="lock" color ="#05375a" size ={20}/>
                    <TextInput placeholder ="Nhập lại mật khẩu" style={styles.textInput2}
                    secureTextEntry ={data.secureTextEntry ? true : false}
                    onChangeText={(val) => handlePasswordChange(val)}
                    autoCapitalize ="none"
                    />
                    <TouchableOpacity onPress ={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                        <FontAwesome5 name ="eye-slash" color ="grey" size={20}/>
                            :
                        <FontAwesome5 name ="eye" color ="grey" size={20}/>}
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity
            onPress={() => navigation.navigate('SignInScreen')}
            style={[styles.signIn, {borderColor: '#009387',borderWidth: 1,marginTop: 15}]}>
                <Text style={[styles.textSign, {color: 'black'}]}>Thay đổi</Text>
            </TouchableOpacity>
            </View>
        </View>
         
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        paddingHorizontal: 20,
        paddingBottom: 50,
        marginTop:30
    },
    footer: {
        flex: 3,
        backgroundColor: '#009387',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        alignItems:'center'
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 23
    },
    text_footer: {
        color: '#fff',
        fontSize: 18,
        marginTop:8
    },
    text_footer2: {
        color: '#fff',
        fontSize: 18,
    },
    action: {
        flexDirection: 'row',
        marginTop: 30,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:90
    },
    textInput2:{
        color: 'black',
        backgroundColor:'#fff',
        fontWeight:'bold',
        fontSize:20,
        width:280
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '40%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor:'#fff'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color:"#FFF"
    },
    img1:{
        width:250,
        height:250,
      },
  });
