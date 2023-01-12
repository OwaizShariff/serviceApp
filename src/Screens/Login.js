


import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Button,
    Text,
    ImageBackground,
    TouchableHighlight,
    useColorScheme,
    View,
    TextInput,
    Image,
    ActivityIndicator
  } from 'react-native';
  
  import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  import SignUp from './SignUp'
  import LoginImg from '../Images/Login.png'
  import Gmail from '../Images/gmail.png'
  import Facebook from '../Images/FacebookLogo.png'
const Login = ({navigation}) => {
  const onLoginHandle = () => {

  }
  return (
    <View >
    <ImageBackground  source={require('../Images/Login.png')} resizeMode="cover" style={styles.bannerImage}>
      <View style={[styles.loginContainer, styles.shadowProp]}>
        <Text style={styles.loginText}>LOGIN</Text>
        <Text style={styles.emailText}>EMAIL</Text>
      <TextInput
        style={styles.input}
        // placeholder={'UserName or Email'}
        // placeholderTextColor="white"
      />
      <Text style={styles.emailText}>Password</Text>
      <TextInput
        style={styles.input}
        // placeholder={'Password'}
        // placeholderTextColor="white"
      />
          <TouchableHighlight style={styles.loginButton} onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </View>
        </TouchableHighlight>
        <Text style={{color: 'white',marginBottom:10,fontSize: 19}}>Or Login Using</Text>
        <View style={{display: 'flex',flexDirection: 'row'}}>
        <Image source={Gmail} style={{height: 50,width: 50,resizeMode:"contain",marginRight: 20}} />
        <Image source={Facebook} style={{height: 50,width: 40,resizeMode:"contain"}} />
        </View>
          <TouchableHighlight style={styles.loginButton}  onPress={() =>
        navigation.navigate('SignUp')} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>SignUp</Text>
          </View>
        </TouchableHighlight>
         </View>
         </ImageBackground>
    </View>
  )
} 
 
const styles = StyleSheet.create({
  bannerImage: {
    height: '100%',
    width: '100%',
  },
  loginContainer: {
    width: '100%', 
    height: '100%', 
    // backgroundColor: '#e9edff',
    // borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 30,
    // marginTop: 100,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  emailText: {
    color:'white',
    textAlign: 'left',
    width: '65%',
  },
  input: {
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    width: 200,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 30,
  },
  whatsApp: {
    width: 100,
    height: 60,

  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
  },
  loginText: {
    marginBottom: 60,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    height: 35,
    width: '70%',
    borderRadius: 20,
    // justifyContent: '',
    marginBottom: 20,
    borderBottomWidth: 1,
    border: 0,
    padding: 10,
    borderBottomColor: 'white',
    placeholderTextColor:'white',
  },

});

export default Login