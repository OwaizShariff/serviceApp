import { StyleSheet, Text, View,ImageBackground,TouchableHighlight } from 'react-native'
import React from 'react'
import LaunchImg from '../Images/serviceBanner.png'
import { WebView } from 'react-native-webview';

const Launch = ({navigation}) => {
  return (
    <View>
      <ImageBackground  source={LaunchImg} style={styles.bannerImage}>
        <WebView source={{uri: 'https://assets.pinterest.com/ext/embed.html?id=703756185401081'}}
   style={{marginTop: 20}} />
      <TouchableHighlight style={styles.getStartedButton} onPress={() => navigation.navigate('Login')} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </View>
        </TouchableHighlight>
        
  </ImageBackground>
    </View>
  )
}

export default Launch

const styles = StyleSheet.create({
    bannerImage: {
        width:'100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        
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