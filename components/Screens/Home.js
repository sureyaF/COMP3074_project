import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { styles } from "../Styles/styles"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as SQLite from 'expo-sqlite';

import {
  SafeAreaView,
  Alert,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,

} from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);
const Drawer = createDrawerNavigator();
const image = require("../Resources/454105_backgrounds-minimal-blue-white-mobile-wallpapers_640x1136_h.jpg");


const db = SQLite.openDatabase('mydb.db');
const HomeScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Separator />
        <Separator />
        <Separator />
        <SafeAreaView >
          <TouchableOpacity
            style={styles.homepagebutton}
            title="Login"
            onPress={
              () => {
                navigation.navigate('login');
              }}>
            <Text style={{ color: 'white', fontSize: 24 }}>Login</Text>
          </TouchableOpacity>

          <Separator />
          <TouchableOpacity
            style={styles.homepagebutton}
            title="Register"
            onPress={() => navigation.navigate('registration')}
          >
            <Text style={{ color: 'white', fontSize: 24 }}>Register</Text>
          </TouchableOpacity>
          <Separator />
          <TouchableOpacity
            style={styles.homepagebutton}
            title="Terms of Use"
            onPress={
              () => {
                navigation.navigate('terms');
              }}>
            <Text style={{ color: 'white', fontSize: 24 }}>Terms</Text>
          </TouchableOpacity>

          <Separator />
          <Separator />
          <Separator />
          <Text style={styles.interfaceText}>Final Submission</Text>
          <Text style={styles.interfaceText}>Group_17</Text>
          <Separator />
          <Text style={styles.interfaceText}>Sureya Farah</Text>
          <Text style={styles.interfaceText}>Adrian Filipe</Text>
          <Text style={styles.interfaceText}>Kanta Husari</Text>
          <Text style={styles.interfaceText}>Sheak Iftakhar Rahaman</Text>
          <Separator />
          <Separator />
          <Separator />
          <Separator />
          <Separator />
          <Separator />
          <Separator />
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export { HomeScreen };