import { StyleSheet, Text, View,Button,ScrollView } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type HomeProps=NativeStackScreenProps<RootStackParamList,'Home'>

const Home = ({navigation}:HomeProps) => {
  return (
    <ScrollView>
    <View>
      <View><Text style={[styles.largeText,styles.largecard]}>FARMAPP </Text></View>
      <ScrollView>
        <Button title='hdk'
        onPress={()=>navigation.navigate("About")}
        ></Button>
        
      
     
    
      
      </ScrollView>

    </View>
    </ScrollView>
  )
}

export default Home;

const styles = StyleSheet.create({
  maincontainer:{
  height:686,
  display:"flex",
  justifyContent:"flex-end",
 
  },
  textColor:{
    color:"black",
  },
    container:{
       display:"flex",
       flexDirection:"row",
       justifyContent:"space-around",
       alignItems:"flex-end",
       marginVertical:18,
       backgroundColor:"black"
    },
    smallText:{
    fontSize:20,
    color:"White",
    fontWeight:"900",
    marginBottom:4,
    marginLeft:4,

    },
    largeText:{
      fontSize:30,
      color:"green",
      fontWeight:"700",
      marginBottom:4,
      marginLeft:4,
      textAlign:"center"
  
      },
    card:{
      borderRadius:7,
      height:40,
      width:"auto",
      backgroundColor:"black",
  
    },
    largecard:{
      borderRadius:7,
      height:40,
      width:"auto",
      backgroundColor:"white",
  
    }

})