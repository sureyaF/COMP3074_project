import React from 'react';
import { DashHome } from "../Screens/DashboardScreens/DashHome"
import { DashProfile } from "../Screens/DashboardScreens/DashProfile"
import { DashRequest } from "../Screens/DashboardScreens/DashRequest"
import { DashUpdate } from "../Screens/DashboardScreens/DashUpdate"

import { styles } from "../Styles/styles"
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



const Tab = createBottomTabNavigator();

const Dashnav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Main"
                component={DashHome} />
            <Tab.Screen
                name="Profile"
                component={DashProfile} />
            <Tab.Screen
                name="Request"
                component={DashRequest} />
            <Tab.Screen
                name="Update"
                component={DashUpdate} />
        </Tab.Navigator>
    )
}
export { Dashnav };

/*
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Update"
            component={DashHome} />
        </Tab.Navigator>
    </NavigationContainer>
*/