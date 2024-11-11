import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screenList/Home'
import SellTab from '../screenList/SellTab';
import HelpTab from '../screenList/HelpTab';
import About from '../screenList/About';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RootTabParamList={

}

const Tab=createBottomTabNavigator();

const TabNavigator = () => {
  return (
   <Tab.Navigator>
    <Tab.Screen name='Home' component={Home} options={{ headerShown: false }} />
    <Tab.Screen name='Sell Store' component={SellTab} />
    <Tab.Screen name='About' component={About} />
    <Tab.Screen name='Help' component={HelpTab} />
   </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})

export default TabNavigator;