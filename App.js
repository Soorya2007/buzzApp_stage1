import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FacebookPage from './screens/fb';
import InstaPage from './screens/insta';

export default class App extends React.Component{
  render(){
  return (
     <AppContainer/>
  );
}
}

const TabNavigator=createBottomTabNavigator({
  Instagram:{screen:InstaPage},
  Facebook:{screen:FacebookPage},
},
)

const AppContainer=createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
