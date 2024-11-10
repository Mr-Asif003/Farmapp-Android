
import React from 'react';
import { View ,Text } from 'react-native';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screen
import Home from './asset/screenList/Home';
import About from './asset/screenList/About';
import Register from './asset/authentication/Register';
import Login from './asset/authentication/Login';


//bottom navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';





export type RootStackParamList={
   Newtab:undefined,
   Register:undefined,
   Login:undefined
}
// export type RootTabParamList={
//   Home:undefined;
//   About:undefined;
// }

const Stack=createNativeStackNavigator<RootStackParamList>();
const Tab=createBottomTabNavigator();

function App():JSX.Element{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register'>
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}
export default App;
