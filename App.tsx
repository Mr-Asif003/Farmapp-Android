
import React from 'react';
import { View ,Text } from 'react-native';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screen
import Home from './asset/screenList/Home';
import About from './asset/screenList/About';


//bottom navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




export type RootStackParamList={
   Newtab:undefined
}
// export type RootTabParamList={
//   Home:undefined;
//   About:undefined;
// }

const Stack=createNativeStackNavigator<RootStackParamList>();
const Tab=createBottomTabNavigator();

function App():JSX.Element{
  return (
    <View><Text>Hello world LL</Text></View>
  )

}
export default App;
