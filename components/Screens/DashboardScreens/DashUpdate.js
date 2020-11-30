import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { styles } from "../../Styles/styles";

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
const image =require("../../Resources/454105_backgrounds-minimal-blue-white-mobile-wallpapers_640x1136_h.jpg");
const DashUpdate = ({ navigation, route }) => {

  return (
    <SafeAreaView style={styles.dashhome}>
      <ImageBackground source={image} style={styles.dashboardimage}>
        <Text>This is Update</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};
export { DashUpdate };