import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screenList/Home";
import About from "../screenList/About";
import { ImageComponent } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();
const StackNavigation=()=>{
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name={Home}
            component={Home}
          />
          <Stack.Screen
            name={About}
            component={About}
          />
         


        </Stack.Navigator>
        </NavigationContainer>
    )
};
const TabNavigator=()=>{
    return(
      <NavigationContainer>
       < Tab.Navigator>
       <Tab.Screen name="Home" component={'Home'}/>
       <Tab.Screen name="About" component={'About'}/>
  
       
      </Tab.Navigator>
      </NavigationContainer>
    )
}
export default TabNavigator;