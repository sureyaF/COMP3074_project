import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { styles } from "../../Styles/styles";
//import { Database } from "../../Data/Database";

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
const image = require("../../Resources/454105_backgrounds-minimal-blue-white-mobile-wallpapers_640x1136_h.jpg");
//Database()
const DashProfile = ({ navigation, route }) => {

  return (
    <SafeAreaView style={styles.dashhome}>
      <ImageBackground source={image} style={styles.dashboardimage}>
        <Text>This is Profile</Text>
        <Text>{}</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export { DashProfile };