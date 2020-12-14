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
  Modal,
  FlatList

} from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);
const image = require("../../Resources/454105_backgrounds-minimal-blue-white-mobile-wallpapers_640x1136_h.jpg");

const db = SQLite.openDatabase('mydb.db');
const g = Global

const Item = ({ item }) => (

  <Text style={{ color: 'black', fontSize: 24 }}>{`${item.id} ${item.topic}`}</Text>

);

const DashRequest = ({ navigation, route }) => {

  const [showmodal, setshowmodal] = useState(false)
  const [topic, setTopic] = useState(null)
  const [request, setRequest] = useState(null)
  const [error, setError] = useState(null)
  const [requeststoshow, setRequeststoshow] = useState(null)
  //--------------------------------
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
      />
    );
  };
  return (
    <SafeAreaView style={styles.dashhome}>
      <ImageBackground source={image} style={styles.dashboardimage}>

        <Separator />
        <Separator />
        <TextInput style={styles.textinputregister}
          placeholder="topic"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => setTopic(value)}
          value={topic}
        />

        <TextInput style={styles.request}
          placeholder="request"
          underlineColorAndroid={"transparent"}
          onChangeText={(value) => setRequest(value)}
          value={request}
        />


        <TouchableOpacity
          style={styles.homepagebutton}
          onPress={
            () => {
              if (topic === null && request === null) {
                setError(`Fields are empty`)
              } else {
                if (topic != null && request != null) {
                  db.transaction(
                    (tx) => {
                      tx.executeSql(`insert into requests (uid,email,topic,message) values (${g.sqlid},'${g.sqlemail}','${topic}','${request}');`, [])
                      setError('Request sent')
                      setRequest(null)
                      setTopic(null)
                    }
                  )
                }
              }
            }
          }
        ><Text style={{ color: 'white', fontSize: 24 }}>Send Request</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.homepagebutton}
          title="Show"
          onPress={
            () => {

              db.transaction(
                (tx) => {
                  tx.executeSql(`select * from requests;`, [],
                    (tx, res) => {
                      let data = res.rows
                      let requests = []
                      for (let i = 0; i < data.length; i++) {
                        requests.push({ id: data.item(i).rid, topic: data.item(i).topic })
                      }
                      setRequeststoshow(requests)
                      setRequeststoshow((state) => {
                        return state;
                      });
                    }
                  )
                }
              )
              setshowmodal(true)
            }
          }
        ><Text style={{ color: 'white', fontSize: 24 }}>View Requests</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={showmodal}
        >
          <View style={{ backgroundColor: '#000000aaa', flex: 1 }}>

            <View style={{ backgroundColor: '#ffffffff', marginTop: 0, margin: 20, padding: 10, borderRadius: 10, }}>
              <Text style={{ color: 'black', fontSize: 24 }}>Requests</Text>

              <FlatList
                data={requeststoshow}
                renderItem={renderItem}
                keyExtractor={(item) => `${item.id}`}
                //extraData={selectedId}
              />
              <TouchableOpacity
                style={styles.homepagebutton}
                title="Show"
                onPress={
                  () => {
                    setshowmodal(false)
                  }
                }>
                <Text style={{ color: 'white', fontSize: 24 }}>Close</Text>
              </TouchableOpacity>


            </View>
          </View>
        </Modal>

        <Text style={styles.errorText}>{error}</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export { DashRequest };