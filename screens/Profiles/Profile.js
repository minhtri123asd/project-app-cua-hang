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
import LinearGradient from 'react-native-linear-gradient';

const Profile = ({navigation}) => {
    
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style = {styles.text_header}>Tài khoản</Text>
        </View>
        <Animatable.View 
        animation ="fadeInUpBig"
        style={styles.footer}>
            <View style={styles.img2}>
                <Image style={styles.img1} source={require('../../assets/logo9.png')}/>
            </View>
            <TouchableOpacity onPress = {() => navigation.navigate('ProfileDetail')} >
                    <View style={styles.action}>
                        <FontAwesome5
                        name ="user"
                        color ="#009387"
                        size ={25}
                        style ={{marginBottom:10}}
                            />
                        <Text style={styles.textInput}>Thông tin tài khoản</Text>
                        <FontAwesome5
                        name ="chevron-right"
                        color ="#05375a"
                        size ={20}
                        style ={{marginBottom:10}}
                            />
                    </View>
            </TouchableOpacity>
            <TouchableOpacity>
                    <View style={styles.action}>
                        <FontAwesome5
                        name ="bell"
                        color ="#009387"
                        size ={25}
                        style ={{marginBottom:10}}
                            />
                        <Text style={styles.textInput}>Thông báo</Text>
                        <FontAwesome5
                        name ="chevron-right"
                        color ="#05375a"
                        size ={20}
                        style ={{marginBottom:10}}
                            />
                    </View>
            </TouchableOpacity>
            <TouchableOpacity>
                    <View style={styles.action}>
                        <FontAwesome5
                        name ="cog"
                        color ="#009387"
                        size ={25}
                        style ={{marginBottom:10}}
                            />
                        <Text style={styles.textInput}>Cài đặt</Text>
                        <FontAwesome5
                        name ="chevron-right"
                        color ="#05375a"
                        size ={20}
                        style ={{marginBottom:10}}
                            />
                    </View>
            </TouchableOpacity>
            <TouchableOpacity>
                    <View style={styles.action}>
                        <FontAwesome5
                        name ="info-circle"
                        color ="#009387"
                        size ={25}
                        style ={{marginBottom:10}}
                            />
                        <Text style={styles.textInput}>Trợ giúp</Text>
                        <FontAwesome5
                        name ="chevron-right"
                        color ="#05375a"
                        size ={20}
                        style ={{marginBottom:10}}
                            />
                    </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress = {() => navigation.navigate('SignInScreen')} >
                    <View style={styles.action}>
                        <FontAwesome5
                        name ="sign-out-alt"
                        color ="#009387"
                        size ={25}
                        style ={{marginBottom:10}}
                            />
                        <Text style={styles.textInput}>Đăng xuất</Text>
                        
                    </View>
            </TouchableOpacity>
        </Animatable.View>
        </View>
         
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1.2,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    footer: {
        flex:13,
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
        fontSize: 18,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        alignItems:'center',
        marginTop:30,
        paddingTop:15
    },
    
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#3A3535',
        fontSize:30,
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 20
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
    },
    img1:{
        width:150,
        height:150,
        borderRadius:90,
        backgroundColor:'black'
      },
      img2:{
        height:155,
        margin:10,
        borderRadius:90,
        alignItems:'center',
      },
  });
