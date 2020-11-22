import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {styles} from "../Styles/styles"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import Share from 'react-native-share';


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
const Drawer = createDrawerNavigator();



const HomeScreen = ({ navigation }) => {
/*
const cutomShare= async()=>{
const shareOptions ={
  message:'Hey I am using Finanacial Advisor',
}
try{
  const ShareResponse=await Share.open(shareOptions);
}
catch(error){
  console.log('Error ==>',error);
}
};
*/
  return (
    <SafeAreaView style={styles.container}>
      <Separator />
      <Separator />
      <Separator />
      <SafeAreaView >
        <Button
          title="Login"
          onPress={
            () => {
              navigation.navigate('login');
            }}
        />
        <Separator />
        <Button
          title="Register"
          onPress={() => navigation.navigate('registration')}
        />
        <Separator />
        <Button
          title="Terms of Use"
          onPress={
            () => {
              navigation.navigate('terms');
            }}
        />
        <Separator />
        <Separator />
        <Separator />
        <Text style={styles.interfaceText}>Prototype 01</Text>
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
    </SafeAreaView>
  );
};

export {HomeScreen};