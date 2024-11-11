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


type RegisterProps = NativeStackScreenProps<RootStackParamList, 'Register'>



const Register = ({ navigation }: RegisterProps) => {
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
    } catch (error) {
      Alert.alert('Error registering user:', 'error has occured in registering')
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

        <LinearGradient colors={['#00ff00', '#99ffcc']} style={styles.registerGradient}  >
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registertxt}>
            Register
          </Text>
          </TouchableOpacity>
        </LinearGradient>

      </View>

      <View style={styles.signInBtnContainer}>
        <Text style={styles.signIn}>Sign In</Text>
      
        <LinearGradient colors={['#F97794', '#623AA2']} style={styles.signingGradient}  >
        <TouchableOpacity onPress={()=>{
          navigation.navigate("Login")
        }}>
          <Text style={styles.registertxt}>
            Sign 
          </Text>
          </TouchableOpacity>
        </LinearGradient>
        
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
    fontSize: 40,
    color: 'black',
    fontWeight: '500'
  },
  createText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    marginBottom: 20
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
    marginVertical: 8,
  },

  registerGradient: {
    padding: 7,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'orange',
    height: 'auto',
    borderRadius: 20,
    marginHorizontal: 95,
    elevation: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
 
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },



  registertxt: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black'
  },

  signInBtnContainer:{
    flexDirection:'row',
    marginTop:30,
    width:'90%',
    fontSize:15,
    alignItems:'center',
    justifyContent:'flex-end'
  },

  signingGradient:{
    height:34,
    width:56,
    borderRadius:17,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:10
  },
signIn:{
  fontSize:25,
  fontWeight:'900',
  color:'black'
}



})


export default Register;