import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.db');
export default function App() {
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
                  tx.executeSql(
                    //statement
                    "insert into users (fname,lname,email,password) values ('a','b','c','d');",
                    //arguments
                    [],
                    //success
                    function () { console.log('success add user') },
                    //error
                    function (err) { console.log('fail add user: ', err) }
                  )
                  //--------------------------show all
                  tx.executeSql(
                    //statement
                    "select * from users;",
                    //arguments
                    [],
                    //success
                    //(_, { rows }) => {
                    (_,{ rows }) => {
                      console.log(JSON.stringify(rows))
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
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});



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
              tx.executeSql(
                //statement
                "insert into users (fname,lname,email,password) values ('a','b','c','d');",
                //arguments
                [],
                //success
                function () { console.log('success add user') },
                //error
                function (err) { console.log('fail add user: ', err) }
              )
              //--------------------------show all
              tx.executeSql(
                //statement
                "select * from users;",
                //arguments
                [],
                //success
                //(_, { rows }) => {
                (_,{ rows }) => {
                  console.log(JSON.stringify(rows))
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

/*
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.db');
export default function App() {
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
              tx.executeSql(
                //statement
                "insert into users (fname,lname,email,password) values ('a','b','c','d');",
                //arguments
                [],
                //success
                function () { console.log('success add user') },
                //error
                function (err) { console.log('fail add user: ', err) }
              )
              //--------------------------show all
              tx.executeSql(
                //statement
                "select * from users;",
                //arguments
                [],
                //success
                //(_, { rows }) => {
                (_,{ rows }) => {
                  console.log(JSON.stringify(rows))
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

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  
 
*/
/*
{
    "_array":
    [
        {"id":1,"fname":"a","lname":"b","email":"c","password":"d"},
        {"id":2,"fname":"e","lname":"f","email":"g","password":"h"}
    ],
    "length":2}
*/