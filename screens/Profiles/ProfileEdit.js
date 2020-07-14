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
import Barcode from "react-native-barcode-builder";
import { ScrollView } from 'react-native-gesture-handler';

const ProfileEdit = ({navigation}) => {
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
            <TouchableOpacity onPress = {()=> navigation.goBack()}>
                <FontAwesome5
                    name ="arrow-left"
                    color ="#fff"
                    size ={25}
                    style ={{margin:10}}/>
            </TouchableOpacity>
            <Text style = {styles.text_header}>Sửa thông tin</Text>
            
        </View>
        <Animatable.View 
        animation ="fadeInUpBig"
        style={styles.footer}>
            <ScrollView>
            <View style={styles.headerImg}>
                <View style={styles.img2}>
                    <Image style={styles.img1} source={require('../../assets/logo9.png')}/>
                </View>
            </View>
            <View style={styles.action}>
                <Text style={styles.textInput}>Họ tên:</Text>
                <TextInput placeholder ="Nguyễn Quân Đạt" style={styles.textInput2} autoCapitalize ="none"/>
            </View>
            <View style={styles.action}>
                <Text style={styles.textInput}>Điện thoại:</Text>
                <TextInput placeholder ="0987654321" style={styles.textInput2} autoCapitalize ="none"/>
            </View>
            <View style={styles.action}>
                <Text style={styles.textInput}>Email:</Text>
                <TextInput placeholder ="DatAuDam@gmail.com" style={styles.textInput2} autoCapitalize ="none"/>
            </View>
            <View style={styles.action}>
                <Text style={styles.textInput}>Địa chỉ</Text>
                <TextInput placeholder ="Củ Chi, TP. Hồ Chí Minh" style={styles.textInput2} autoCapitalize ="none"/>
            </View>
            <TouchableOpacity onPress = {() => navigation.navigate('ProfileDetail')}>
                <View style ={styles.button}>
                    <LinearGradient  
                    colors = {['#02AAB0','#00CDAC']}
                    style ={styles.signIn}
                    >
                    <Text style ={styles.textSign}>
                        Lưu thay đổi
                    </Text>
                    </LinearGradient>
                </View>
            </TouchableOpacity>
            </ScrollView>
        </Animatable.View>
        </View>
        
         
    );
};

export default ProfileEdit;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1.2,
        paddingHorizontal: 10,
        flexDirection:'row'
    },
    footer: {
        flex:13,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
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
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        marginTop:5,
        paddingTop:15
    },
    action2: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        alignItems:'center',
    },
    textInput: {
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#3A3535',
        fontSize:25,
    },
    textInput2: {
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'gray',
        fontSize:25,
        borderWidth: 1,
        borderColor: 'gray',
        flex:1,
        borderRadius:10,
        marginTop:5
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
        width:135,
        height:135,
        borderRadius:90,
        backgroundColor:'black'
      },
      img2:{
        height:140,
        borderRadius:90,
        alignItems:'center',
      },
      headerImg:{
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center'
      },
      barCode:{
        justifyContent:'center',
        alignItems:'center',
        flex:5,
      },
  });
