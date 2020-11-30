import React from 'react';
import { Dimensions } from 'react-native'
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  interface: {
    backgroundColor: '#005ac8',
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
    color: '#005ac8', 
    fontSize: 24,
    paddingLeft:"15%",
    alignItems:"center",
    justifyContent:"center",
  },
  interfaceTexttitle: {
    color: 'white', 
    fontSize: 24,
    //paddingLeft:"15%",
    alignItems:"center",
    justifyContent:"center",
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
    paddingTop: 0,
    borderTopWidth: 2,
    borderColor: '#ffffff',
    //margin: 5,
    //width: 250, 
    //alignSelf: 'center'
    //justifyContent: 'center',
  },
  logincontainer: {
    flex: 1,
    backgroundColor: '#82d3ff',
    alignItems: 'center',
    paddingTop: 0,
    borderTopWidth: 2,
    borderColor: '#ffffff',
    //margin: 5,
    //width: 250, 
    //alignSelf: 'center'
    //justifyContent: 'center',
  },
  registercontainer: {
    flex: 1,
    backgroundColor: '#82d3ff',
    alignItems: 'center',
    paddingTop: 0,
    borderTopWidth: 2,
    borderColor: '#ffffff',
    //margin: 5,
    //width: 250, 
    //alignSelf: 'center'
    //justifyContent: 'center',
  },
  termscontainer: {
    flex: 1,
    backgroundColor: '#82d3ff',
    alignItems: 'center',
    paddingTop: 0,
    borderTopWidth: 2,
    borderColor: '#ffffff',
    //margin: 5,
    //width: 250, 
    //alignSelf: 'center'
    //justifyContent: 'center',
  },
  dashboardcontainer: {
    //flex: -1,
    height: 95,
    backgroundColor: '#005ac8',
    alignItems: "stretch",
    paddingTop: 10,
    borderTopWidth: 2,
    borderColor: '#ffffff',
    //margin: 5,
    //width: 250, 
    //alignSelf: 'center'
    //justifyContent: 'center',
  },
  dashboardbodycontainer: {
    //flex: 1,
    backgroundColor: '#82d3ff',
    //alignItems: 'center',
    paddingTop: 50,
    borderTopWidth: 2,
    borderColor: '#ffffff',
    //margin: 5,
    //width: 250, 
    //alignSelf: 'center'
    //justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
    //borderBottomColor: '#737373',
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
  textinputlogin: {
   borderWidth: 1,
   borderColor: "#575dd9",
   alignSelf: "stretch",
   margin: 32,
   height: 50,
   borderRadius: 6,
   paddingHorizontal: 16,
   fontSize: 24,
   fontWeight: "300",
  },
  textinputregister: {
   borderWidth: 1,
   borderColor: "#575dd9",
   alignSelf: "stretch",
   margin: 15,
   height: 50,
   borderRadius: 6,
   paddingHorizontal: 16,
   fontSize: 24,
   fontWeight: "300",
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
    color: '#005ac8',
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft:"35%"
  },
  dashcontainer: {
    flex: 25,
    backgroundColor: '#82d3ff',
    alignItems: 'center',
    paddingTop: 0,
    //margin: 5,
    //width: 250, 
    //alignSelf: 'center'
    //borderTopWidth:2,
    //borderColor:'#ffffff',
    //justifyContent: 'center',
  },
  dashbody: {
    flex: 1,
    //borderWidth: 1,
    backgroundColor: '#82d3ff',
  },
  dashhome: {
    //backgroundColor: '#82d3ff',
    alignItems: 'center',
    //flex: 1,
    //paddingTop: -2,
    //marginTop: 0,
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
  },
  image:{
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width:"100%",
      height:"100%",
  },
  loginimage:{
      //flex: 1,
      resizeMode: "cover",
      //justifyContent: "center",
      width:"100%",
      height:"110%",
      //marginTop:15
      paddingTop:30
  },
  registerimage:{
      //flex: 1,
      resizeMode: "cover",
      //justifyContent: "center",
      width:"100%",
      height:"110%",
      //marginTop:15
      paddingTop:30
  },
  dashboardimage:{
      //flex: 1,
      resizeMode: "cover",
      //justifyContent: "center",
      width:"100%",
      height:"100%",
      //marginTop:15
      //paddingTop:30
      //borderWidth:2
  },
  dashboardbodyimage:{
      //flex: 1,
      resizeMode: "cover",
      //justifyContent: "center",
      width:"100%",
      height:"100%",
      //marginTop:15
      //paddingTop:0
  },
  termsimage:{
      //flex: 1,
      resizeMode: "cover",
      //justifyContent: "center",
      width:"100%",
      height:"110%",
      //marginTop:15
      paddingTop:30
  },
  homepagebutton:{
    backgroundColor: "#008ff0",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 32,
    marginHorizontal: 32,
    borderRadius: 6,

  },
  loginpagebutton:{
    backgroundColor: "#008ff0",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 0,
    marginHorizontal: 145,
    borderRadius: 6,
  },
  dashboardlogoutpagebutton:{
    backgroundColor: "#008ff0",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 0,
    marginHorizontal: 160,
    borderRadius: 6,
  },
  registerpagebutton:{
    backgroundColor: "#008ff0",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 0,
    marginHorizontal: 135,
    borderRadius: 6,

  },
});

export { styles }