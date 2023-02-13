import IssLocationScreen from './Screens.js/Home';
import HomeScreen from './Screens.js/Home';
import MeteorsScreen from './Screens.js/Meteors';
import {View, Text, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();


 function App(){
  return(
     
    <NavigationContainer>
       <Stack.Navigator initialRouteName= "Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name= "Home" component={HomeScreen}/>
        <Stack.Screen name= "Meteors" component={MeteorsScreen}/>
        <Stack.Screen name= "IssLocation" component={IssLocationScreen}/>
       </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App;