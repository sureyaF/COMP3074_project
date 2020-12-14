import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {styles} from "../Styles/styles"
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {LoginScreen} from "../Screens/Login";
import { Dashnav } from "../Nav/Dashnav";
import Global from "../Data/Global";
//import GlobalData from "../Data/GlobalData"
import * as SQLite from 'expo-sqlite';
import {
  SafeAreaView,
  Alert,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,

} from 'react-native';
import { set } from 'react-native-reanimated';
const Separator = () => (
  <View style={styles.separator} />
);
const Drawer = createDrawerNavigator();
const image =require("../Resources/454105_backgrounds-minimal-blue-white-mobile-wallpapers_640x1136_h.jpg");

const db = SQLite.openDatabase('mydb.db');
var g=Global

const DashBoard = ({ navigation,route }) => {


  const [sqlid, setsqlid] = useState(route.params.paramsKey[0])
  const [sqlfname, setsqlfname] = useState(route.params.paramsKey[1])
  const [sqllname, setsqllname] = useState(route.params.paramsKey[2])
  const [sqlemail, setsqlemail] = useState(route.params.paramsKey[3])
  const [sqlpassword, setsqlpassword] = useState(route.params.paramsKey[4])

    return (
      <>
        <SafeAreaView style={styles.dashboardcontainer}>

            <TouchableOpacity
            style={styles.dashboardlogoutpagebutton}
            title="Log out"
            onPress={
            () => {
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
            }}>
            <Text style={{ color: 'white', fontSize: 15 }}>Logout</Text>
          </TouchableOpacity>
            <Separator />
            <Text style={{ color: 'white', fontSize: 15, paddingLeft:"5%" }}>{`Hello ${sqlfname}`}</Text>

        </SafeAreaView>
        <SafeAreaView style={styles.dashbody}>
          {/*this area is blank but it exists*/}
          <Dashnav />
        </SafeAreaView>
      </>
    );
  };

  
  export {DashBoard};
