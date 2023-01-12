import { 
    StyleSheet,
     Text, 
     View,
     TextInput,
     TouchableHighlight
} from 'react-native'
import React from 'react'

const SignUp = () => {
  return (
    <View style={[styles.loginContainer, styles.shadowProp]}>
       <Text style={styles.signupText}>SignUp</Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        placeholder={'UserName or Email'}
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        placeholder={'Phone No.'}
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        placeholder={'Password'}
      />
      <TouchableHighlight style={styles.loginButton} onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>SignUp</Text>
          </View>
        </TouchableHighlight>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  loginContainer: {
    width: 300, 
    height: 400, 
    // backgroundColor: '#e9edff',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    marginTop: 100,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  signupText: {
    marginBottom: 100,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  loginText: {

  },
  input: {
    height: 35,
    width: '70%',
    borderRadius: 20,
    // justifyContent: '',
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    width: 100,
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
  },
})