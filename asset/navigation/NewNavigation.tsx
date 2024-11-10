import React from 'react';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screen
import Home from '../screenList/Home';
import About from '../screenList/About';



//bottom navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Screen } from 'react-native-screens';

const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();

function homeScreen(){
    return(
    <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='About' component={About}/>
    </Tab.Navigator>
    )
    
}





function NewNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={homeScreen}/>
                <Stack.Screen name='About' component={About}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default NewNavigation;


