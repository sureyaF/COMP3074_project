import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { styles } from "../../Styles/styles";
import { Picker } from '@react-native-picker/picker';
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
  //  Picker

} from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);
const db = SQLite.openDatabase('mydb.db');
const g = Global
const image = require("../../Resources/454105_backgrounds-minimal-blue-white-mobile-wallpapers_640x1136_h.jpg");


const DashUpdate = ({ navigation, route }) => {

  const [pickerValue, setPickerValue] = useState(null)
  const [pickerState, setpickerState] = useState(null)

  const [date, setdate] = useState(null)
  const [insertvalue, setinsertvalue] = useState(null)

  const [error, seterror] = useState(null)

  const [criteriarent, setCriteriarent] = useState(false)
  const [criteriagas, setCriteriagas] = useState(false)
  const [criteriagrocery, setCriteriagrocery] = useState(false)



  return (
    <SafeAreaView style={styles.dashhome}>
      <ImageBackground source={image} style={styles.dashboardimage}>



        <Picker
          //style={{height: 300, width: 300}}
          selectedValue={pickerState}
          onValueChange={
            (value) => {
              setPickerValue(value)
              setpickerState(value)
              setPickerValue((state) => { return state; })
              setpickerState((state) => { return state; })
              //console.log(pickerValue)
            }
          }
        >
          <Picker.Item label="Select an Item" value='0' ></Picker.Item>
          <Picker.Item label="rent" value="rent"></Picker.Item>
          <Picker.Item label="gas" value="gas"></Picker.Item>
          <Picker.Item label="grocery" value="grocery"></Picker.Item>
        </Picker>
        <TextInput style={styles.request}
          placeholder="Date: yy/mm/dd"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => setdate(value)}
          value={date}
        />

        <TextInput style={styles.request}
          placeholder="Value"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => setinsertvalue(value)}
          value={insertvalue}
        />
        <TouchableOpacity
          style={styles.homepagebutton}
          title="update"
          onPress={
            () => {
              setPickerValue((state) => { return state; })
              setpickerState((state) => { return state; })
              db.transaction(
                (tx) => {
                  if (pickerValue === '0' || date === null || insertvalue === null) {
                    seterror('Fields are empty or no option is picked')
                  } else {
                    if (pickerValue === 'rent' && date != null && insertvalue != null) {
                      //rent
                      tx.executeSql(`insert into expenses (uid,email,date,rent,electric,gas,cell,grocery,insurance,credit,entertainment,misc) values (${g.sqlid},"${g.sqlemail}","${date}",${insertvalue},0,0,0,0,0,0,0,0) ;`, [])
                      setdate(null)
                      setinsertvalue(null)
                      seterror('Rent Added')
                    }else if(pickerValue === 'gas' && date != null && insertvalue != null){
                      tx.executeSql(`insert into expenses (uid,email,date,rent,electric,gas,cell,grocery,insurance,credit,entertainment,misc) values (${g.sqlid},"${g.sqlemail}","${date}",0,0,${insertvalue},0,0,0,0,0,0) ;`, [])
                      setdate(null)
                      setinsertvalue(null)
                      seterror('Gas Added')
                    }else if(pickerValue === 'grocery' && date != null && insertvalue != null){
                      tx.executeSql(`insert into expenses (uid,email,date,rent,electric,gas,cell,grocery,insurance,credit,entertainment,misc) values (${g.sqlid},"${g.sqlemail}","${date}",0,0,0,0,${insertvalue},0,0,0,0) ;`, [])
                      setdate(null)
                      setinsertvalue(null)
                      seterror('Grocery Added')
                    }
                  }


                }
              )
            }

          }
        ><Text style={{ color: 'white', fontSize: 24 }}>Update</Text>
        </TouchableOpacity>

        <Text style={styles.errorText}>{error}</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};
export { DashUpdate };
