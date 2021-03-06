import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';


import DetailsCurrencyScreen from './screens/DetailsCurrencyScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import HomeScreen from './screens/HomeScreen';
import Chart from './screens/Chart';
import Walett from './screens/WalettScreen'

import * as firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';
firebase.initializeApp(firebaseConfig);

class App extends Component {

render(){
  return (
    <NavigationContainer>

    <Stack.Navigator initialRouteName="Sign In">
      <Stack.Screen name="Sign In" component={LoginScreen}  
      options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>


      <Stack.Screen name="HomeScreen" component={HomeScreen}
       options={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} 
      />


      <Stack.Screen name="Chart" component={Chart} 
       options={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>


      <Stack.Screen name="DashboardScreen" component={DashboardScreen}
       options={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} />


      <Stack.Screen name="DetailsCurrencyScreen" component={DetailsCurrencyScreen} 
       options={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
      
      <Stack.Screen name="Walett" component={Walett} 
       options={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
    </Stack.Navigator>
  </NavigationContainer>
    )
  }
}

const Stack = createStackNavigator();




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App