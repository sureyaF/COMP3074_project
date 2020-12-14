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
    ScrollView,
    Image,
    ImageBackground,

} from 'react-native';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const Separator = () => (
    <View style={styles.separator} />
);
const image = require("../../Resources/454105_backgrounds-minimal-blue-white-mobile-wallpapers_640x1136_h.jpg");
const db = SQLite.openDatabase('mydb.db');

const g = Global


const DashHome = ({ navigation, route }) => {

    let sumrent = 0
    for (let i = 0; i < g.rent.length; i++) {
        sumrent += g.rent[i]
    }
    console.log(`sum rent -------- ${sumrent}`)

    // gas
    //console.log(`gas -------- ${g.gas}`)
    let sumgas = 0
    for (let i = 0; i < g.gas.length; i++) {
        sumgas += g.gas[i]
    }
    console.log(`sum gas -------- ${sumgas}`)

    //grocery
    //console.log(`grocery -------- ${g.grocery}`)
    let sumgrocery = 0
    for (let i = 0; i < g.grocery.length; i++) {
        sumgrocery += g.grocery[i]
    }
    console.log(`sum grocery -------- ${sumgrocery}`)
    // creating series for graphs
    // date rent

    //---------------------------------------
    const chartConfig = {
        backgroundGradientFrom: "#ffffff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#ffffff",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

    };
    //graph data prepare
    //dates
    let graphdates = []
    for (let i = g.datadates.length - 5; i < g.datadates.length; i++) {
        graphdates.push(g.datadates[i])
    }
    g.graphdates = graphdates

    //grocery
    let grocerygraph = []
    for (let i = g.grocery.length - 5; i < g.grocery.length; i++) {
        grocerygraph.push(g.grocery[i])
    }
    g.grocerygraph = grocerygraph

    //rent
    let rentgraph = []
    for (let i = g.rent.length - 5; i < g.rent.length; i++) {
        rentgraph.push(g.rent[i])
    }
    g.rentgraph = rentgraph

    //gas
    let gasgraph = []
    for (let i = g.gas.length - 5; i < g.gas.length; i++) {
        gasgraph.push(g.gas[i])
    }
    g.gasgraph = gasgraph


    //total
    let totalgraph = []
    for (let i = g.datadates.length - 5; i < g.datadates.length; i++) {
        totalgraph.push(g.rent[i] + g.gas[i] + g.grocery[i])
    }
    g.totalgraph = totalgraph



    //graph data ready------------
    //grocery  
    const datagrocery = {
        labels: g.graphdates,
        datasets: [
            {
                data: g.grocerygraph,
                color: (opacity = 1) => `rgba(109, 6, 125, ${opacity})`, // optional
            }
        ],
    };

    //rent  
    const datarent = {
        labels: g.graphdates,
        datasets: [
            {
                data: g.rentgraph,
                color: (opacity = 1) => `rgba(109, 6, 125, ${opacity})`, // optional
            }
        ],
    };

    //gas  
    const datagas = {
        labels: g.graphdates,
        datasets: [
            {
                data: g.gasgraph,
                color: (opacity = 1) => `rgba(109, 6, 125, ${opacity})`, // optional
            }
        ],
    };

    //total  
    const datatotal = {
        labels: g.graphdates,
        datasets: [
            {
                data: g.totalgraph,
                color: (opacity = 1) => `rgba(109, 6, 125, ${opacity})`, // optional
            }
        ],
    };



    return (
        <SafeAreaView style={styles.dashhome}>
            <ImageBackground source={image} style={styles.dashboardimage}>
                <ScrollView >
                    <View style={styles.dashhomescroll}>
                        {/*Scroll Component start*/}

                        <View style={styles.dashhomebox}>
                            <View style={styles.dashhomeboxinner}>
                                <Text style={styles.dashhomeboxinnerText}>Total Rent</Text>
                                <Text style={styles.dashhomeboxinnerText}>{sumrent}</Text>
                            </View>
                        </View>
                        <View style={styles.dashhomebox}>
                            <View style={styles.dashhomeboxinnerGraph}>
                                {/* this is rent */}
                                <LineChart
                                    data={datarent}
                                    width={400}
                                    height={170}
                                    verticalLabelRotation={-5}
                                    chartConfig={chartConfig}
                                    bezier
                                />
                            </View>
                        </View>

                        <View style={styles.dashhomebox}>
                            <View style={styles.dashhomeboxinner}>
                                <Text style={styles.dashhomeboxinnerText}>Total Gas</Text>
                                <Text style={styles.dashhomeboxinnerText}>{sumgas}</Text>
                            </View>
                        </View>
                        <View style={styles.dashhomebox}>
                            <View style={styles.dashhomeboxinnerGraph}>
                                {/* this is gas */}
                                <LineChart
                                    data={datagas}
                                    width={400}
                                    height={170}
                                    verticalLabelRotation={-5}
                                    chartConfig={chartConfig}
                                    bezier
                                />
                            </View>
                        </View>

                        <View style={styles.dashhomebox}>
                            <View style={styles.dashhomeboxinner}>
                                <Text style={styles.dashhomeboxinnerText}>Total Grocery</Text>
                                <Text style={styles.dashhomeboxinnerText}>{sumgrocery}</Text>
                            </View>
                        </View>
                        <View style={styles.dashhomebox}>
                            <View style={styles.dashhomeboxinnerGraph}>
                                {/* this is grocery */}
                                <LineChart
                                    data={datagrocery}
                                    width={400}
                                    height={170}
                                    verticalLabelRotation={-5}
                                    chartConfig={chartConfig}
                                    bezier
                                />

                            </View>
                        </View>

                        <View style={styles.dashhomebox}>
                            <View style={styles.dashhomeboxinner}>
                                <Text style={styles.dashhomeboxinnerText}>Total Cost</Text>
                                <Text style={styles.dashhomeboxinnerText}>{sumrent + sumgas + sumgrocery}</Text>
                            </View>
                        </View>
                        <View style={styles.dashhomebox}>
                            <View style={styles.dashhomeboxinnerGraph}>
                                {/*this is for total cost */}
                                <LineChart
                                    data={datatotal}
                                    width={400}
                                    height={170}
                                    verticalLabelRotation={-5}
                                    chartConfig={chartConfig}
                                    bezier
                                />
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
