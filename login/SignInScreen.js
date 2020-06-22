import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
   
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LinearGradient from 'react-native-linear-gradient';

const SignInScreen = ({navigation}) => {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    const handlePasswordChange = (val) => {
              setData({
                  ...data,
                  password: val
              });
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style = {styles.text_header}> Đăng Nhập</Text>
            </View>
        <Animatable.View 
        animation ="fadeInUpBig"
        style={styles.footer}>
            
        <Text style ={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <FontAwesome5
                name ="user"
                color ="#05375a"
                size ={20}
                    />
            <TextInput 
            placeholder ="Nhập Email"
            style={styles.textInput}
            autoCapitalize ="none"
            />
        </View>
        <Text style ={styles.text_footer}>Mật Khẩu</Text>
        <View style={styles.action}>
                <FontAwesome5
                name ="lock"
                color ="#05375a"
                size ={20}
                    />

            <TextInput 
            placeholder ="Nhập Mật Khẩu"
            style={styles.textInput}
            secureTextEntry ={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
            autoCapitalize ="none"
            />
            <TouchableOpacity onPress ={updateSecureTextEntry}>
                {data.secureTextEntry ?
                <FontAwesome5
                name ="eye-slash"
                color ="grey"
                size={20}
                />
                    :
                  <FontAwesome5
                name ="eye"
                color ="grey"
                size={20}
                />
            }
            </TouchableOpacity>
        </View>
        <TouchableOpacity
        onPress = {() => navigation.navigate('Home')}
        >
        <View style ={styles.button}>
            <LinearGradient  
            colors = {['#02AAB0','#00CDAC']}
            style ={styles.signIn}
            >
               <Text style ={styles.textSign}>
                   Đăng Nhập
               </Text>
            </LinearGradient>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('SignUpScreen')}
         style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Đăng Ký</Text>
        </TouchableOpacity>
        </Animatable.View>
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
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
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
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color:"#FFF"
    }
  });
