import { Button, StyleSheet, Text, View, } from 'react-native';
import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type AboutProps=NativeStackScreenProps<RootStackParamList,'About'>

const About = ({navigation}:AboutProps) => {
  return (

    <View style={styles.container}>
      <Text style={styles.smallText} onPress={()=>navigation.navigate('Home')} >LISTS</Text>
      <View><Text>Hello</Text></View>
    <Button 
    title='Go back to Home'
    onPress={()=>navigation.navigate('Home')} 
    />
    </View>
  )
}

export default About;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
       
    },
  smallText:{
    fontWeight:"700",    
    justifyContent:"center",
    fontSize:18,
    color:"black",
    display:"flex",
    
  },
})