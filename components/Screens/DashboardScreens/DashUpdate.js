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
  TouchableOpacity

} from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);

const DashUpdate = ({ navigation, route }) => {

  return (
    <SafeAreaView style={styles.dashhome}>
        <Text>This is Update</Text>
    </SafeAreaView>
  );
};

export { DashUpdate };