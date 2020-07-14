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

const ProfileDetail = ({navigation}) => {
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
            <Text style = {styles.text_header}>Thông tin</Text>
            <TouchableOpacity style={{marginLeft:160}} onPress = {()=> navigation.navigate('ProfileEdit')}>
                <FontAwesome5
                    name ="edit"
                    color ="#fff"
                    size ={30}
                    style ={{marginTop:8}}/>
            </TouchableOpacity>
        </View>
        <Animatable.View 
        animation ="fadeInUpBig"
        style={styles.footer}>
            <ScrollView>
            <View style={styles.headerImg}>
                <View style={styles.img2}>
                    <Image style={styles.img1} source={require('../../assets/logo9.png')}/>
                </View>
                <View style={styles.barCode}>
                    <Barcode value = 'barcode' height={70} width={1.4} textColor={'black'} background={'#fff'} lineColor={'black'} text={'01233-2312312'}/>
                </View>
            </View>
            <View style={styles.action}>
                <Text style={styles.textInput}>Họ tên:</Text>
                <Text style={styles.textInput2}>Nguyễn Quân Đạt</Text>
            </View>
            <View style={styles.action}>
                <Text style={styles.textInput}>Điện thoại:</Text>
                <Text style={styles.textInput2}>0987654321</Text>
            </View>
            <View style={styles.action}>
                <Text style={styles.textInput}>Email:</Text>
                <Text style={styles.textInput2}>DatAuDam@gmail.com</Text>
            </View>
            <View style={styles.action}>
                <Text style={styles.textInput}>Mật khẩu:</Text>
                <TouchableOpacity onPress = {()=> navigation.navigate('ProfileEditPass')}>
                    <View style={styles.action2}>
                        <Text style={styles.textInput2}>*******</Text>
                        <FontAwesome5
                        name ="pencil-alt"
                        color ="#05375a"
                        size ={20}
                        style ={{paddingTop:10, marginLeft:120}}
                            />
                    </View>
            </TouchableOpacity>
            </View>
            <View style={styles.action}>
                <Text style={styles.textInput}>Địa chỉ</Text>
                <Text style={styles.textInput2}>Củ Chi, TP. Hồ Chí Minh</Text>
            </View>
            </ScrollView>
        </Animatable.View>
        </View>
        
         
    );
};

export default ProfileDetail;

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
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        alignItems:'center',
        marginTop:15,
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
        color: '#3A3535',
        fontSize:25,
        marginTop:10
    },
    textInput2: {
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'gray',
        fontSize:25,
        marginTop:10
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
