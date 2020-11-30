import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Nav } from "./components/Nav/Nav"
import * as SQLite from 'expo-sqlite';
//-------------------------------
/*
import {HomeScreen} from "./components/Screens/Home"
import {LoginScreen} from "./components/Screens/Login"
import {TermsScreen} from "./components/Screens/Terms"
import {RegisterScreen} from "./components/Screens/Register"
*/
//-------------------------------
import { styles } from "./components/Styles/styles"

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//this is for future use
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//const Tab=createBottomTabNavigator();

import {
  SafeAreaView,
  Alert,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground

} from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);
//const Drawer = createDrawerNavigator();
const db = SQLite.openDatabase('mydb.db');
export default function App() {
  const [users, setUsers] = React.useState(null)
  //---------------------------------------------Database start
  React.useEffect(
    () => {
      db.transaction(
        //callback  
        (tx) => {
          //----------------------------- create
          tx.executeSql(
            //statement
            'CREATE TABLE IF NOT EXISTS users (id	INTEGER NOT NULL,fname	TEXT NOT NULL,lname	TEXT NOT NULL,email	TEXT NOT NULL,password	TEXT NOT NULL,PRIMARY KEY(id AUTOINCREMENT));',
            //arguments
            [],
            //success
            function () { console.log('success create') },
            //error
            function (err) { console.log('fail create: ', err) }
          )
          //---------------------------- insert
          /*
          tx.executeSql(
            //statement
            "insert into users (fname,lname,email,password) values ('i','j','k','l');",
            //arguments
            [],
            //success
            function () { console.log('success add user') },
            //error
            function (err) { console.log('fail add user: ', err) }
          )
          */
          //--------------------------show all
          tx.executeSql(
            //statement
            "select * from users;",
            //arguments
            [],
            //success
            //(_, { rows }) => {
            (_, { rows }) => {
              var data = JSON.stringify(rows)
              setUsers(data);
              console.log(data);
              //console.log(`type of users is : ${typeof (users)}`);
              //console.log(`spesific user: ${users[0]}`);

            },
            //error
            function (err) { console.log('fail fetch data: ', err) }
          )
        },
        //error
        function (err) { console.log('fail connect to database: ', err) },
        //success
        function () { console.log('success connect to database: ') },
      )
    }, []

  );
  //---------------------------------------------Database End
  return (
    <>
      <SafeAreaView style={styles.interface}>
        <Text style={styles.interfaceTexttitle}>Financial Advisor</Text>
      </SafeAreaView>
      <Nav />
    </>
  );
}





/*
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="tab"
            component={TermsScreen}/>
        </Tab.Navigator>
    </NavigationContainer>

*/
/*

    <Separator />
    <Separator />
    <SafeAreaView>
    <Text>Welcome</Text>
    </SafeAreaView>
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
      </Drawer.Navigator>
      </NavigationContainer>
*/