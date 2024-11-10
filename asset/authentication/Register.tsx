import { View, Text, TextInput, Touchable, TouchableOpacity, Alert, StyleSheet, Button } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { registerUser } from '../firebase services/auth';
import { LinearGradient } from 'react-native-linear-gradient';

//navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Login from './Login';
type RegisterProps=NativeStackScreenProps<RootStackParamList,'Register'>



const Register = ({navigation}:RegisterProps) => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Password do not match');
      return;
    }
    try {
      await registerUser(email, password);
      Alert.alert('Success', 'A verification Email has been sent to your Email Address');
      setEmail('');
      setpassword('')
      setConfirmPassword('');
    } catch (errord) {
      Alert.alert('Error', 'error is occurred try again')
    }
  }

  return (

    <View style={styles.Container} >
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>FarmApp
        </Text>
      </View>
      <View style={styles.helloContainer}>
        <Text style={styles.createText}>Create Your Account
        </Text>
      </View>

      <View style={styles.inputContainer}>

        <TextInput style={styles.textInputstyle} placeholder='Email'
          onChangeText={setEmail}
          keyboardType='email-address'

          autoCapitalize='none'
        />
      </View>
      <View>
        <TextInput style={styles.inputContainer} placeholder='Password'
          onChangeText={setpassword}
          secureTextEntry
        />
      </View>
      <View>
        <TextInput style={styles.inputContainer} placeholder='Confirm Password'
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

      </View>
      <View>
        <TouchableOpacity onPress={handleRegister} style={styles.Registerbtn}>

          <Text style={styles.registertxt} >Register</Text>
        </TouchableOpacity>

      </View>
      <View>
        <TouchableOpacity  style={styles.loginbtn}>

          <Text style={styles.registertxt} onPress={()=>navigation.navigate('Login')}>Login -></Text>
        </TouchableOpacity>

      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#f5f5f5',


  },
  helloContainer: {
    color: 'black',

    textAlign: 'center',
    height: 'auto',
    display: 'flex',
    alignItems: 'center'
  },
  helloText: {
    marginTop: 30,
    fontSize: 60,
    color: 'black',
    fontWeight: '500'
  },
  createText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    marginBottom: 30
  },

  Textcolor: {
    color: 'black'
  },


  textInputstyle: {
    backgroundColor: "white",
    flexDirection: 'row',
    borderRadius: 10,
    marginHorizontal: 10

  },
  inputContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 30,
    elevation: 15,
    marginVertical: 10,
  },

  Registerbtn: {
    padding:7,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'orange',
    height:'auto',
    borderRadius: 20,
    marginHorizontal: 95,
    elevation: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

  
  loginbtn:{
    padding:7,
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'orange',
      height:'auto',
      borderRadius: 20,
     
      elevation: 10,
      marginVertical: 30,
      marginLeft:260,
      alignItems: 'center',
      justifyContent: 'center',
  
  
  },
  registertxt:{
    fontSize:20,
    fontWeight:'700',
    color:'white'
  }



})


export default Register;