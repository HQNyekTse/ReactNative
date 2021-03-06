import React from "react";
import { Platform, Dimensions } from 'react-native';
import { createAppContainer, createDrawerNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation';

// Import side menu
import TodoScreen from '../pages/TodoScreen';
import MapScreen from '../pages/MapScreen';
import ProfileScreen from '../pages/ProfileScreen';
// import Bottom menu
import HomeScreen from '../pages/HomeScreen';
import ContactScreen from '../pages/ContactScreen';
import InfoScreen from '../pages/InfoScreen';

import Icon from '@expo/vector-icons/Ionicons';
import MenuDrawer from '../components/MenuDrawer'

const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth : WIDTH*0.83,
    contentComponent: ({ navigation }) => {
        return(<MenuDrawer navigation={navigation} />)
    }
}

const Tabs = createBottomTabNavigator({
    Profile : {
         screen: ProfileScreen,
         navigationOptions:{
             tabBarLabel: "Home",
             tabBarIcon: ({ tintColor }) => (
                 <Icon name="ios-home" size={30}/>
             ), tabBarOptions: {
                 showIcon: true,
                 activeTintColor: "#000000"
             },
        }
    },
    Info : {
         screen: InfoScreen,
         navigationOptions:{
             tabBarLabel: "Info",
             tabBarIcon: ({ tintColor }) => (
                 <Icon name="ios-information-circle" size={30}/>
             ), tabBarOptions: {
                 showIcon: true,
                 activeTintColor: "#000000"
             },
        }
    },
    Contact : {
         screen: ContactScreen,
         navigationOptions:{
             tabBarLabel: "Contact",
             tabBarIcon: ({ tintColor }) => (
                 <Icon name="md-contact" size={30}/>
             ), tabBarOptions: {
                 showIcon: true,
                 activeTintColor: "#000000"
             },
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style:{
            backgroundColor: '#fff',
        },
        indicatorStyle: {
            backgroundColor: '#000'
        },
    }
});

const DrawerNavigator = createDrawerNavigator(
    {   Home: {
        screen : Tabs
        },
        Profile: {
            screen: ProfileScreen
        },
        Todo: {
            screen: TodoScreen
        },
        Map: {
            screen: MapScreen
        },
    },
    DrawerConfig
);

const StackNavigator = createStackNavigator({
    DrawerNavigator: {
        screen: DrawerNavigator,
        navigationOptions: {
            header: null
        }
    }
})

export default createAppContainer(StackNavigator);