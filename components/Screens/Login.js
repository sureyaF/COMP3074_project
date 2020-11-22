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
  TouchableOpacity

} from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);
const Drawer = createDrawerNavigator();
const email = "admin@admin.ca";
const password = "admin123";




const LoginScreen = ({ navigation, route }) => {

  const [emailinput, setemailinput] = useState(null)
  const [passwordinput, setpasswordinput] = useState(null)
  const [error, setError] = useState(null)

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Cancel"
        onPress={
          () => {
            setemailinput(null)
            setpasswordinput(null)
            setError(null)
            navigation.navigate('home')
          }}
      />
              <Separator/>
        <Text style={styles.interfaceText}>Login</Text>
      <Separator />
      <TextInput style={styles.textinput}
        placeholder="Email"
        underlineColorAndroid={"transparent"}
        onChangeText={(value) => setemailinput(value)}
        value={emailinput}
      />
      <TextInput style={styles.textinput}
        placeholder="Password"
        underlineColorAndroid={"transparent"}
        secureTextEntry={true}
        onChangeText={(value) => setpasswordinput(value)}
        value={passwordinput}
      />
      <Separator />
      <Separator />
      <TouchableOpacity
        style={styles.registerButton}
        onPress={
          () => {
            if (emailinput === email && passwordinput === password) {
              //setError('correct information')
              //pass the values into another screen
              navigation.navigate('dashboard',{paramsKey:[emailinput,passwordinput]})
              setemailinput(null)
              setpasswordinput(null)
            } else {
              if(emailinput===null||passwordinput==null ){
                setError('Empty Fields')
              }else{
                setError('Wrong information')
              }
              
            }
          }}
      ><Text style={styles.registerbtntxt}>Login</Text>
      </TouchableOpacity>
      <Separator />
      <Separator />
      <Text style={styles.errorText}>{error}</Text>
    </SafeAreaView>
  );
};



export { LoginScreen };