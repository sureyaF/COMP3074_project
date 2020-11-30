import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import {styles} from "../Styles/styles"
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

const image =require("../Resources/454105_backgrounds-minimal-blue-white-mobile-wallpapers_640x1136_h.jpg");
//const Drawer = createDrawerNavigator();
const RegisterScreen = ({ navigation }) => {
  
  const [firstname, setfirstname] = useState(null)
  const [lastname, setlastname] = useState(null)
  const [email, setemail] = useState(null)
  const [password, setpassword] = useState(null)
  const [repassword, setrepassword] = useState(null)
  const [error, setError] = useState(null)
  
  return (
      <SafeAreaView style={styles.registercontainer}>
        <ImageBackground source={image} style={styles.registerimage}>
          <TouchableOpacity
            style={styles.loginpagebutton}
            title="Cancel"
            onPress={
            () => {
            setfirstname(null)
            setlastname(null)
            setemail(null)
            setpassword(null)
            setrepassword(null)
            setError(null)
            navigation.navigate('home')
            }}
          >
            <Text style={{ color: 'white', fontSize: 24 }}>Cancel</Text>
          </TouchableOpacity>
        <Separator/>
        <Separator/>
        <TextInput style={styles.textinputregister}
        placeholder="First Name"
        underlineColorAndroid={"transparent"}
        onChangeText={(value) => setfirstname(value)}
        value={firstname}
        />
        <TextInput style={styles.textinputregister}
        placeholder="Last Name"
        underlineColorAndroid={"transparent"}
        onChangeText={(value) => setlastname(value)}
        value={lastname}
        />
        <TextInput style={styles.textinputregister}
        placeholder="Email"
        underlineColorAndroid={"transparent"}
        onChangeText={(value) => setemail(value)}
        value={email}
        />
        <TextInput style={styles.textinputregister}
        placeholder="Password"
        underlineColorAndroid={"transparent"}
        secureTextEntry={true}
        onChangeText={(value) => setpassword(value)}
        value={password}
        />
        <TextInput style={styles.textinputregister}
        placeholder="ReEnter Password"
        underlineColorAndroid={"transparent"}
        secureTextEntry={true}
        onChangeText={(value) => setrepassword(value)}
        value={repassword}
        />
        <Separator/>
        <Separator/>
        <TouchableOpacity
        style={styles.registerpagebutton}
        onPress={
          () => {
            if(password===repassword && password!=null && repassword!=null && firstname!=null && lastname!=null && email!=null){
              setError('Correct Tokens')
              //navigation.navigate('home')
            }else{
              if(firstname===null || lastname===null || email===null || password===null || repassword===null){
                setError('one or more fields are empty')
              }else{
                setError('Wrong Tokens')
              }
            }
          }}
        ><Text style={{ color: 'white', fontSize: 24 }}>Register</Text>
        </TouchableOpacity>
        <Separator />
      <Separator />
      <Text style={styles.errorText}>{error}</Text>
      </ImageBackground>
      </SafeAreaView>
    );
  };



  
  export {RegisterScreen};

  /*
          <Button
          title="Go Home"
          onPress={
            () => {
              navigation.navigate('home')
            }}
        />
  
firstname===null || lastname===null || email===null || password===null || repassword===null


  */