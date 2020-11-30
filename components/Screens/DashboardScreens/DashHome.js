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
    ScrollView,
    Image,
    ImageBackground,

} from 'react-native';
const Separator = () => (
    <View style={styles.separator} />
);
const image = require("../../Resources/454105_backgrounds-minimal-blue-white-mobile-wallpapers_640x1136_h.jpg");
const DashHome = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.dashhome}>
            <ImageBackground source={image} style={styles.dashboardimage}>
                <ScrollView >
                    <View style={styles.dashhomescroll}>
                        {/*Scroll Component start*/}
                        <View style={styles.dashhomebox}>
                            <View style={styles.dashhomeboxinner}>
                                <Text style={styles.dashhomeboxinnerText}>Total revenue</Text>
                                <Text style={styles.dashhomeboxinnerText}>50K</Text>
                            </View>
                        </View>
                        <View style={styles.dashhomebox}>
                            <View style={styles.dashhomeboxinner}>
                                <Image
                                    style={styles.dashhomeboxinnerImage}
                                    source={{ uri: 'https://webstockreview.net/images/graph-clipart-stock-market-graph-6.png' }}
                                >
                                </Image>
                            </View>
                        </View>
                        <View style={styles.dashhomebox}>
                            <View style={styles.dashhomeboxinner}>
                                <Text style={styles.dashhomeboxinnerText}>Costs</Text>
                                <Text style={styles.dashhomeboxinnerText}>10K</Text>
                            </View>
                        </View>
                        <View style={styles.dashhomebox}>
                            <View style={styles.dashhomeboxinner}>
                                <Image
                                    style={styles.dashhomeboxinnerImage}
                                    source={{ uri: 'https://images.vexels.com/media/users/3/129465/isolated/preview/2aad4a2a464bc55a63e37ac3ff55e44a-blue-grey-growing-linechart-by-vexels.png' }}
                                >
                                </Image>
                            </View>
                        </View>
                        <View style={styles.dashhomebox}>
                            <View style={styles.dashhomeboxinner}>
                                <Text style={styles.dashhomeboxinnerText}>Indicator</Text>
                            </View>
                        </View>
                        <View style={styles.dashhomebox}>
                            <View style={styles.dashhomeboxinner}>
                                <Text style={styles.dashhomeboxinnerText}>Graph</Text>
                            </View>
                        </View>
                        <View style={styles.dashhomebox}>
                            <View style={styles.dashhomeboxinner}>
                                <Text style={styles.dashhomeboxinnerText}>Indicator</Text>
                            </View>
                        </View>
                        <View style={styles.dashhomebox}>
                            <View style={styles.dashhomeboxinner}>
                                <Text style={styles.dashhomeboxinnerText}>Graph</Text>
                            </View>
                        </View>

                        {/*Scroll Component end*/}
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};
export { DashHome };


/*
<View style={styles.dashhomescroll}>

*/