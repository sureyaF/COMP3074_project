import React from 'react';

import {HomeScreen} from "../Screens/Home"
import {LoginScreen} from "../Screens/Login"
import {TermsScreen} from "../Screens/Terms"
import {RegisterScreen} from "../Screens/Register"
import {DashBoard} from "../Screens/DashBoard"
//to add dash board screen 
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
const Tab = createBottomTabNavigator();
const Nav=()=>{
    return (
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
    )

}

export {Nav};

/**
 

 */