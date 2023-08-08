import { StyleSheet, Text, View,ImageBackground,TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import LaunchImg from '../Images/serviceBanner.png'
import { WebView } from 'react-native-webview';
import { useDispatch } from 'react-redux';

const Launch = ({navigation}) => {
  const dispatch = useDispatch();
  const [number,setNumber] = useState()
  const onChangeNumber = (e) => {
    setNumber(e.target.value)
  }

  const onSubmitHandle = () => {
    dispatch(sendOtp())
    navigation.navigate('Login')
  }

  // console.log("hello",process.env.REACT_APP_BASEURL);
  
  return (
    <View>
      <ImageBackground  source={LaunchImg} style={styles.bannerImage}>
        <Text style={styles.welcomeText}>Welcome To the Laung</Text>
        <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
        <TouchableOpacity style={styles.button} onPress={onSubmitHandle}>
          <Text>Get started</Text>
        </TouchableOpacity>
  </ImageBackground>
    </View>
  )
}

export default Launch

const styles = StyleSheet.create({
    bannerImage: {
        width:'100%',
        height: '100%',
        // justifyContent: 'space-around',
        alignItems: 'center', 
    },
    input: {
      color: 'white',
      // backgroundColor: 'white',
    },
    welcomeText: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold'
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
      },
    button: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 30,
        width: 150,
        justifyContent: 'center',
        borderRadius: 20,
    }
})



        {/* <WebView source={{uri: 'https://assets.pinterest.com/ext/embed.html?id=703756185401081'}}
          style={{marginTop: 20}} /> */}

        {/* <TouchableHighlight style={styles.getStartedButton} onPress={() => navigation.navigate('Login')} underlayColor="white"> */}
          {/* </TouchableHighlight> */}