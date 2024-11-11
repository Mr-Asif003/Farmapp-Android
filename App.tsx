
import React from 'react';
import { View ,Text } from 'react-native';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screen
import TabNavigator from './asset/navigation/TabNavigator';
import Register from './asset/authentication/Register';
import Login from './asset/authentication/Login';


//bottom navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';





export type RootStackParamList={
   Newtab:undefined,
   Register:undefined,
   Login:undefined,
   TabNavigator:undefined
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
      <Stack.Navigator initialRouteName='TabNavigator'>
      <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}
export default App;
