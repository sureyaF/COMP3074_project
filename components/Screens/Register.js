import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import {styles} from "../Styles/styles"
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as SQLite from 'expo-sqlite';
import Global from "../Data/Global"
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
const db = SQLite.openDatabase('mydb.db');
const RegisterScreen = ({ navigation }) => {
  const [firstname, setfirstname] = useState(null)
  const [lastname, setlastname] = useState(null)
  const [email, setemail] = useState(null)
  const [password, setpassword] = useState(null)
  const [repassword, setrepassword] = useState(null)
  const [error, setError] = useState(null)
  const [criteria, setcriteria] = useState(false)
  
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
            <Text style={{ color: 'white', fontSize: 24 }}>Back</Text>
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
            ()=>{
              db.transaction(
                (tx)=>{
                  tx.executeSql(
                    `select * from users where fname='${firstname}'and lname='${lastname}' and email='${email}'`, [],
                    (tx,res)=>{
                      let len = res.rows.length
                      if(len<=0){
                        if(password===repassword && password!=null && repassword!=null && firstname!=null && lastname!=null && email!=null){
                          setcriteria(true)
                        }else{
                          if(firstname===null || lastname===null || email===null || password===null || repassword===null){
                            setError('One or more fields are empty')
                          }
                        }
                      }else{
                        setError('user already exists with the same email')
                      }
                    },
                  )
                    if(criteria){
                      tx.executeSql(`insert into users (fname,lname,email,password) values ('${firstname}','${lastname}','${email}','${password}');`, []);
                      tx.executeSql('select * from users',[],(tx,res)=>{ let data=res.rows ;console.log(data)})
                      setError('Registration Suuccess')
                      setcriteria(false)
                      Global.sqlid=null,
                      Global.sqlfname=null,
                      Global.sqllname=null,
                      Global.sqlemail=null,
                      Global.sqlpassword=null,
                      
                      Global.datadates=null,
                      Global.rent=null,
                      Global.gas=null,
                      Global.grocery=null,
                  
                      Global.graphdates=null,
                      Global.rentgraph=null,
                      Global.gasgraph=null,
                      Global.grocerygraph=null,
                      Global.totalgraph=null,
                    navigation.navigate('home')
                        }
                },
              )
            }
        }
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