import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { styles } from "../../Styles/styles";
import * as SQLite from 'expo-sqlite';
import Global from "../../Data/Global"

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
  Modal
} from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);
const image = require("../../Resources/454105_backgrounds-minimal-blue-white-mobile-wallpapers_640x1136_h.jpg");
const db = SQLite.openDatabase('mydb.db');

const DashProfile = ({ navigation, route }) => {
  //modal state
  const [showmodal, setshowmodal] = useState(false)

  //dispatch data from database
  const [sqlid, setsqlid] = useState(null)
  const [sqlfname, setsqlfname] = useState(null)
  const [sqllname, setsqllname] = useState(null)
  const [sqlemail, setsqlemail] = useState(null)
  const [sqlpassword, setsqlpassword] = useState(null)
  const [sqlpasswordlength, setsqlpasswordlength] = useState(null)

  //get data from global
  const statefname = Global.sqlfname
  const statelname = Global.sqllname
  const stateemail = Global.sqlemail

  //store update data modal
  const [modalfname, setmodalfname] = useState(null)
  const [modallname, setmodallname] = useState(null)
  const [modalemail, setmodalemail] = useState(null)
  const [modalpassword, setmodalpassword] = useState(null)
  const [modalrepassword, setmodalrepassword] = useState(null)

  //error
  const [error, setError] = useState(null)
  React.useEffect(
    () => {
      db.transaction(
        (tx) => {
          tx.executeSql(`SELECT * FROM users WHERE fname='${statefname}' and lname='${statelname}' and email='${stateemail}'`, [],
            (tx, res) => {
              let data = res.rows.item(0)
              setsqlid(data.id)
              setsqlfname(data.fname)
              setsqllname(data.lname)
              setsqlemail(data.email)
              setsqlpassword(data.password)
              setsqlpasswordlength(data.password.length)
              //console.log(data.fname)
            }

          )
        }
      )
    }, []
  )
  return (
    <SafeAreaView style={styles.dashhome}>
      <ImageBackground source={image} style={styles.dashboardimage}>

        <Text style={{ color: 'white', fontSize: 24, marginLeft: "30%",marginTop:50 }}>{`First Name:  ${sqlfname}`}</Text>
        <Text style={{ color: 'white', fontSize: 24, marginLeft: "30%",marginTop:15 }}>{`Last Name: ${sqllname}`}</Text>
        <Text style={{ color: 'white', fontSize: 24, marginLeft: "30%",marginTop:15 }}>{`Email: ${sqlemail}`}</Text>
        <Text style={{ color: 'white', fontSize: 24, marginLeft: "30%",marginTop:15 }}>{`Password:  ${"*".repeat(parseInt(sqlpasswordlength))}`}</Text>

        <TouchableOpacity
          style={styles.homepagebutton}
          title="Show"
          onPress={
            () => {
              setshowmodal(true)
            }
          }>
          <Text style={{ color: 'white', fontSize: 24 }}>Edit</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={showmodal}
        >
          <View style={{ backgroundColor: '#000000aaa', flex: 1 }}>

            <View style={{ backgroundColor: '#ffffffff', marginTop: 0, margin: 20, padding: 10, borderRadius: 10, }}>
              <Text style={{ color: 'black', fontSize: 24 }}>New Info</Text>

              <TextInput style={styles.textinputmodal}
                placeholder={sqlfname}
                underlineColorAndroid={"transparent"}
                secureTextEntry={false}
                onChangeText={(value) => setmodalfname(value)}
                value={modalfname}
              />

              <TextInput style={styles.textinputmodal}
                placeholder={sqllname}
                underlineColorAndroid={"transparent"}
                secureTextEntry={false}
                onChangeText={(value) => setmodallname(value)}
                value={modallname}
              />

              <TextInput style={styles.textinputmodal}
                placeholder={sqlemail}
                underlineColorAndroid={"transparent"}
                secureTextEntry={false}
                onChangeText={(value) => setmodalemail(value)}
                value={modalemail}
              />

              <TextInput style={styles.textinputmodal}
                placeholder='Password'
                underlineColorAndroid={"transparent"}
                secureTextEntry={true}
                onChangeText={(value) => setmodalpassword(value)}
                value={modalpassword}
              />
              <TextInput style={styles.textinputmodal}
                placeholder='Re-Password'
                underlineColorAndroid={"transparent"}
                secureTextEntry={true}
                onChangeText={(value) => setmodalrepassword(value)}
                value={modalrepassword}
              />

              <Text style={styles.errorText}>{error}</Text>

              <TouchableOpacity
                style={styles.homepagebutton}
                title="Show"
                onPress={
                  () => {
                    if (modalfname === null || modallname === null || modalemail === null || modalpassword === null || modalrepassword === null) {
                      setError('Fields are empty, fill or cancel')
                    } else {
                      if (modalfname != null && modallname != null && modalemail != null && modalpassword != null && modalrepassword != null && modalpassword === modalrepassword) {


                          db.transaction(
                            (tx)=>{
                              tx.executeSql(`UPDATE users SET fname='${modalfname}', lname='${modallname}', email='${modalemail}', password='${modalpassword}' WHERE id=${sqlid};`,[]);
                              tx.executeSql(`UPDATE expenses SET email='${modalemail}' WHERE uid=${sqlid};`,[]);

                            }
                          )
                        //reset error
                        setError(null)
                        //reset fields
                        setmodalfname(null)
                        setmodallname(null)
                        setmodalemail(null)
                        setmodalpassword(null)
                        setmodalrepassword(null)
                        //reset global state
                        Global.sqlid = null
                        Global.sqlfname = null
                        Global.sqllname = null
                        Global.sqlemail = null
                        Global.sqlpassword = null
                        //works fine update all information and go home
                        navigation.navigate('home')

                      } else {
                        setError('wrong tokens')
                      }
                    }
                  }
                }>
                <Text style={{ color: 'white', fontSize: 24 }}>Update</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.homepagebutton}
                title="Show"
                onPress={
                  () => {
                    setshowmodal(false)
                  }
                }>
                <Text style={{ color: 'white', fontSize: 24 }}>Cancel</Text>
              </TouchableOpacity>


            </View>

          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
};

export { DashProfile };