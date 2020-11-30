import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { styles } from "../Styles/styles"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  SafeAreaView,
  Alert,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity

} from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);
const Drawer = createDrawerNavigator();
const image = require("../Resources/454105_backgrounds-minimal-blue-white-mobile-wallpapers_640x1136_h.jpg");

const TermsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.termscontainer}>
      <ImageBackground source={image} style={styles.registerimage}>
        <TouchableOpacity
          style={styles.loginpagebutton}
          title="Go Home"
          onPress={
            () => {
              navigation.navigate('home')
            }}
        >
          <Text style={{ color: 'white', fontSize: 24 }}>Back</Text>
        </TouchableOpacity>
        <Separator />
        <Separator />
        <Text style={{ color: 'white', fontSize: 24, paddingLeft:"5%" }}>
          Financial Advisor is the Mobile App version of Capstone Project Web Application that has the same name
        </Text>
        <Separator />
        <Text style={{ color: 'white', fontSize: 24, paddingLeft:"5%"  }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};


export { TermsScreen };