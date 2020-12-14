import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { styles } from "../Styles/styles"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as SQLite from 'expo-sqlite';
import Global from "../../components/Data/Global"
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



const db = SQLite.openDatabase('mydb.db');
var g = Global
const LoginScreen = ({ navigation, route }) => {

  const [emailinput, setemailinput] = useState(null)
  const [passwordinput, setpasswordinput] = useState(null)


  const [sqlid, setsqlid] = useState(null)
  const [sqlfname, setsqlfname] = useState(null)
  const [sqllname, setsqllname] = useState(null)
  const [sqlemail, setsqlemail] = useState(null)
  const [sqlpassword, setsqlpassword] = useState(null)

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
              Global.sqlid = null,
                Global.sqlfname = null,
                Global.sqllname = null,
                Global.sqlemail = null,
                Global.sqlpassword = null
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
              db.transaction
                (
                  (tx) => {
                    //------------dates
                    tx.executeSql(
                      `select date from expenses;`,
                      [],
                      (tx, res) => {
                        let data = res.rows
                        let len = res.rows.length
                        const dates = []
                        for (let i = 0; i < len; i++) {
                          dates.push(data.item(i).date)
                        }
                        g.datadates = dates
                        return g.datadates 
                      },
                      //function (err) { console.log('fail fetch data: ', err) }
                    )
                  }
                )
              db.transaction
                (
                  (tx) => {
                    //------------rent
                    tx.executeSql(
                      `select rent from expenses;`,
                      [],
                      (tx, res) => {
                        let data = res.rows
                        let len = res.rows.length
                        let rents = []
                        for (let i = 0; i < len; i++) {
                          rents.push(data.item(i).rent)
                        }
                        g.rent = rents
                        return g.rent

                      },
                      //function (err) { console.log('fail fetch data: ', err) }
                    )
                  }
                )
              db.transaction
                (
                  (tx) => {
                    //------------gas
                    tx.executeSql(
                      `select gas from expenses;`,
                      [],
                      (tx, res) => {
                        let data = res.rows
                        let len = res.rows.length
                        let gases = []
                        for (let i = 0; i < len; i++) {
                          gases.push(data.item(i).gas)
                        }
                        g.gas = gases
                        return g.gas
                      },
                      //function (err) { console.log('fail fetch data: ', err) }
                    )
                  }
                )
              db.transaction
                (
                  (tx) => {
                    //------------grocery
                    tx.executeSql(
                      `select grocery from expenses;`,
                      [],
                      (tx, res) => {
                        let data = res.rows
                        let len = res.rows.length
                        let groceries = []
                        for (let i = 0; i < len; i++) {
                          groceries.push(data.item(i).grocery)
                        }
                        g.grocery = groceries
                        return g.grocery
                      },
                      //function (err) { console.log('fail fetch data: ', err) }
                    )
                  }
                )
              db.transaction
                (
                  (tx) => {
                    tx.executeSql(
                      `select * from users where password='${passwordinput}'and email='${emailinput}'`, [],
                      (tx, res) => {
                        let len = res.rows.length
                        if (emailinput === null || passwordinput == null) {
                          setError('Empty Fields')
                        } else {
                          if (len > 0) {
                            let data = res.rows.item(0)
                            setsqlid(data.id) //sqlid
                            setsqlemail(data.email) //sqlemail
                            setsqlpassword(data.password) //sqlpassword
                            setsqlfname(data.fname) //sqlfname
                            setsqllname(data.lname) //sqllname
                            if (emailinput == sqlemail && passwordinput == sqlpassword) {
                              Global.sqlid = sqlid;
                              Global.sqlfname = sqlfname;
                              Global.sqllname = sqllname;
                              Global.sqlemail = sqlemail;
                              Global.sqlpassword = sqlpassword;
                              //navigation.navigate('dashboard', { paramsKey: [sqlid, sqlfname, sqllname, sqlemail, sqlpassword] });
                              navigation.navigate('dashboard', { paramsKey: [sqlid, sqlfname, sqllname, sqlemail, sqlpassword] });

                              setemailinput(null)
                              setpasswordinput(null)
                            }
                          } else {
                            setError('NO Profile found Please register')
                          }
                        }
                      },
                    )
                  },
                )
            }
          }
        ><Text style={{ color: 'white', fontSize: 24 }}>Login</Text>
        </TouchableOpacity>
        <Separator />
        <Separator />
        <Text style={styles.errorText}>{error}</Text>
      </ImageBackground>
    </SafeAreaView >
  );
};
export { LoginScreen };