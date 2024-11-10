import { View, Text } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Colors } from 'react-native/Libraries/NewAppScreen';
type RegisterProps=NativeStackScreenProps<RootStackParamList,'Register'>
const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default Login