import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  interface: {
    backgroundColor: '#82d3ff',
    color: '#fff',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingTop: 35,
  },
  welcomingtext:{
    fontSize:15,
    color: '#850d6b'
  },
  interfaceText: {
    fontSize: 24,
    color: '#850d6b'
  },
  interfaceWelcomeText:{
    fontSize:24,
    color: '#850d6b',
    paddingLeft:15
  },
  container: {
    flex: 3,
    backgroundColor: '#82d3ff',
    alignItems: 'center',
    paddingTop: 30,
    borderTopWidth: 2,
    borderColor: '#ffffff',
    //margin: 5,
    //width: 250, 
    //alignSelf: 'center'
    //justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    //borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    width: 350,
    marginLeft: 50,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginBottom:30,
  },
  registerButton: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#6498b5',
    width: 100,
    marginLeft: 50,

  },
  registerbtntxt: {
    color: '#fff',
    fontWeight: 'bold'
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20
  },
  dashcontainer: {
    flex: 25,
    backgroundColor: '#82d3ff',
    alignItems: 'center',
    paddingTop: 2,
    //margin: 5,
    //width: 250, 
    //alignSelf: 'center'
    //borderTopWidth:2,
    //borderColor:'#ffffff',
    //justifyContent: 'center',
  },
  dashbody: {
    flex: 26,
    //borderWidth: 1,
    backgroundColor: '#82d3ff',
  },
  dashhome: {
    backgroundColor: '#82d3ff',
    alignItems: 'center',
    flex: 2,
    paddingTop: 3,
    marginTop: 0,
    //justifyContent:'center',
    //borderWidth:1,
  },
  dashnavTab: {
    backgroundColor: '#82d3ff',
  },
  dashhomescroll: {
    //borderWidth: 1,
    width: Dimensions.get('window').width,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    //paddingLeft:"50%",
    //paddingRight:"50%",
    //height:"100%",
    //alignItems: 'center',
    //alignSelf: 'stretch',
    //justifyContent:'center',
  },
  dashhomebox: {
    width: 200,
    height: 200,
    padding: 5,
    //borderWidth:1,
  },
  dashhomeboxinner: {
    flex: 1,
    backgroundColor: "#a86ade",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius:25,
    opacity: 0.6,
  },
  dashhomeboxinnerText:{
    fontSize: 25,
    color:"#ffffff",
    opacity: 1,
  },
  dashhomeboxinnerImage:{
    width: 185,
    height: 185,
  }
});

export { styles }