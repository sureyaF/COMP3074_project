import React from 'react';

import { HomeScreen } from "../Screens/Home"
import { LoginScreen } from "../Screens/Login"
import { TermsScreen } from "../Screens/Terms"
import { RegisterScreen } from "../Screens/Register"
import { DashBoard } from "../Screens/DashBoard"
//to add dash board screen 
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  SafeAreaView,
  Alert,
  StyleSheet,
  Text,
  View,
  Button

} from 'react-native';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Nav = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerVisible: false,
        }}
      >
        <Stack.Screen
          name="home"
          component={HomeScreen} />

        <Stack.Screen
          name="login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="registration"
          component={RegisterScreen} />
        <Stack.Screen
          name="terms"
          component={TermsScreen} />
        <Tab.Screen
          name="dashboard"
          component={DashBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export { Nav };

/*

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
        <Tab.Screen
            name="dashboard"
            component={DashBoard} />
        </Drawer.Navigator>
        </NavigationContainer>






 */