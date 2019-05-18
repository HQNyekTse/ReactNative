import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './navigations/DrawerNavigator';
import firebase from "firebase";
import AuthLoadingScreen from './pages/AuthLoadingScreen';
import LoginScreen from './pages/LoginPages';

import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";

const AppStack = createSwitchNavigator({ DrawerNavigator });
const AuthStack = createSwitchNavigator({ Login: LoginScreen }, { headerMode: 'none' });

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC-z_UTK4mceEWiCGlAdPmkOmISX09lGwg",
      authDomain: "expo-tutor.firebaseapp.com",
      databaseURL: "https://expo-tutor.firebaseio.com",
      projectId: "expo-tutor",
      storageBucket: "expo-tutor.appspot.com",
      messagingSenderId: "210317032890"

    });
  }

  render() {
    return (
      <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
