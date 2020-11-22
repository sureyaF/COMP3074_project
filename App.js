import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Nav } from "./components/Nav/Nav"
//-------------------------------
/*
import {HomeScreen} from "./components/Screens/Home"
import {LoginScreen} from "./components/Screens/Login"
import {TermsScreen} from "./components/Screens/Terms"
import {RegisterScreen} from "./components/Screens/Register"
*/
//-------------------------------
import { styles } from "./components/Styles/styles"

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//this is for future use
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//const Tab=createBottomTabNavigator();

import {
  SafeAreaView,
  Alert,
  StyleSheet,
  Text,
  View,
  Button

} from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);
//const Drawer = createDrawerNavigator();

export default function App() {
  return (

    <>
      <SafeAreaView style={styles.interface}>
      <Text style={styles.interfaceText}>Financial Advisor</Text>
      </SafeAreaView>
      <Nav />

    </>
  );
}





/*
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="tab"
            component={TermsScreen}/>
        </Tab.Navigator>
    </NavigationContainer>

*/
/*

    <Separator />
    <Separator />
    <SafeAreaView>
    <Text>Welcome</Text>
    </SafeAreaView>
    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen
          name="home"
          component={HomeScreen} />

        <Drawer.Screen
          name="login"
          component={LoginScreen}
          />
        <Drawer.Screen
          name="registration"
          component={RegisterScreen} />
        <Drawer.Screen
          name="terms"
          component={TermsScreen} />
      </Drawer.Navigator>
      </NavigationContainer>
*/