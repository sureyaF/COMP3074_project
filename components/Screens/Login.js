import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
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
  TextInput,
  TouchableOpacity,
  ImageBackground,

} from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);
const image = require("../Resources/454105_backgrounds-minimal-blue-white-mobile-wallpapers_640x1136_h.jpg");


const Drawer = createDrawerNavigator();
const email = "admin";
const password = "admin";




const LoginScreen = ({ navigation, route }) => {

  const [emailinput, setemailinput] = useState(null)
  const [passwordinput, setpasswordinput] = useState(null)
  const [error, setError] = useState(null)

  return (
    <SafeAreaView style={styles.logincontainer}>
      <ImageBackground source={image} style={styles.loginimage}>
        <TouchableOpacity
          style={styles.loginpagebutton}
          title="Cancel"
          onPress={
            () => {
              setemailinput(null)
              setpasswordinput(null)
              setError(null)
              navigation.navigate('home')
            }}
        >
          <Text style={{ color: 'white', fontSize: 24 }}>Cancel</Text>
        </TouchableOpacity>
        <Separator />
        <Separator />
        <TextInput style={styles.textinputlogin}
          placeholder="Email"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => setemailinput(value)}
          value={emailinput}
        />
        <TextInput style={styles.textinputlogin}
          placeholder="Password"
          underlineColorAndroid={"transparent"}
          secureTextEntry={true}
          onChangeText={(value) => setpasswordinput(value)}
          value={passwordinput}
        />
        <Separator />
        <Separator />
        <TouchableOpacity
          style={styles.loginpagebutton}
          onPress={
            () => {
              if (emailinput === email && passwordinput === password) {
                //setError('correct information')
                //pass the values into another screen
                navigation.navigate('dashboard', { paramsKey: [emailinput, passwordinput] })
                setemailinput(null)
                setpasswordinput(null)
              } else {
                if (emailinput === null || passwordinput == null) {
                  setError('Empty Fields')
                } else {
                  setError('Wrong information')
                }

              }
            }}
        ><Text style={{ color: 'white', fontSize: 24 }}>Login</Text>
        </TouchableOpacity>
        <Separator />
        <Separator />
        <Text style={styles.errorText}>{error}</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};



export { LoginScreen };