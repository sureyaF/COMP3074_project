import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {styles} from "../Styles/styles"
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {LoginScreen} from "../Screens/Login"
import { Dashnav } from "../Nav/Dashnav"

import {
  SafeAreaView,
  Alert,
  StyleSheet,
  Text,
  View,
  Button

} from 'react-native';
import { set } from 'react-native-reanimated';
const Separator = () => (
  <View style={styles.separator} />
);
const Drawer = createDrawerNavigator();

const DashBoard = ({ navigation,route }) => {
    //receive the values form another screen
    const [user, setuser] = useState(null)
    const [pass, setpass] = useState(`${route.params.paramsKey[1]}`) 
    return (
    <>
    
      <SafeAreaView style={styles.container}>
        <Button
          title="Log out"
          onPress={
            () => {
                setuser(null)
                setpass(null)
                navigation.navigate('home')
            }}
        />
        <Separator />
        <Text style={styles.welcomingtext}>{`Hello ${route.params.paramsKey[0]}`}</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.dashbody}>
        {/*this area is blank but it exists*/}
      <Dashnav />
      </SafeAreaView>
      </>
    );
  };

  
  export {DashBoard};

  /*
        <SafeAreaView style={styles.dashbody}>
      <Text>this is the body of dashboard</Text>
      <Dashnav />
      </SafeAreaView>
  
  */