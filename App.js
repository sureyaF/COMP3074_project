import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Nav } from "./components/Nav/Nav"
import * as SQLite from 'expo-sqlite';
import Global from "./components/Data/Global"
const g=Global
import { styles } from "./components/Styles/styles"

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';



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
const db = SQLite.openDatabase('mydb.db');
export default function App() {
  const [users, setUsers] = React.useState(null)
  //---------------------------------------------Database start
  React.useEffect(
    () => {
      db.transaction(
        //callback  
        (tx) => {
          //--- create users
          tx.executeSql(
            //statement
            'CREATE TABLE IF NOT EXISTS users (id	INTEGER NOT NULL,fname	TEXT NOT NULL,lname	TEXT NOT NULL,email	TEXT NOT NULL,password	TEXT NOT NULL,PRIMARY KEY(id AUTOINCREMENT));',
            [],
            //success
            function () { console.log('success create') },
            //error
            function (err) { console.log('fail create: ', err) }
          )
          //--- create expensis
          tx.executeSql(
            //statement
            'CREATE TABLE IF NOT EXISTS "expenses" ("eid"	INTEGER NOT NULL UNIQUE,"uid"	INTEGER NOT NULL,"email"	TEXT NOT NULL,"date"	TEXT NOT NULL,"rent"	NUMERIC NOT NULL,"electric"	NUMERIC NOT NULL,"gas"	NUMERIC NOT NULL,"cell"	NUMERIC NOT NULL,"grocery"	NUMERIC NOT NULL,"insurance"	NUMERIC NOT NULL,"credit"	NUMERIC NOT NULL,"entertainment"	NUMERIC NOT NULL,"misc"	NUMERIC NOT NULL,FOREIGN KEY("uid") REFERENCES "Users"("id"),PRIMARY KEY("eid" AUTOINCREMENT));',
            [],
            //success
            function () { console.log('success create') },
            //error
            function (err) { console.log('fail create: ', err) }
          )
          //--- create requests 
          tx.executeSql(
            //statement
            'CREATE TABLE IF NOT EXISTS "requests" ("rid"	INTEGER NOT NULL UNIQUE, "uid"	INTEGER NOT NULL, "email"	TEXT, "topic"	TEXT, "message"	TEXT, FOREIGN KEY("uid") REFERENCES "users"("id"), FOREIGN KEY("email") REFERENCES "users"("email"), PRIMARY KEY("rid" AUTOINCREMENT));',
            //'DROP TABLE expenses;',
            //arguments
            [],
            //success
            function () { console.log('success create') },
            //error
            function (err) { console.log('fail create: ', err) }
          )
          //---------------------------- insert
          //----------------------------------    test this method of insert start
          //tx.executeSql("insert into users (fname,lname,email,password) values ('john','doe','admin@admin.ca','pass');",[]);
  
          //----------------------------------    test this method of insert end
          /* 
         tx.executeSql(
           //statement
           "insert into users (fname,lname,email,password) values ('john','doe','aa@bb.ca','ccc');",
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
            //"select * from expenses;",
            [],
            //success

            (tx, res) => {
              let data = res.rows
  
              //setUsers(data);
              console.log(data)
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