import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import Ionicon from '@expo/vector-icons/Ionicons';

export default class MenuButton extends Component {
  render() {
    return (
      <Ionicon
        name="md-menu"
        color="#000"
        size={32}
        style={styles.menuIcon}
        onPress={()=>this.props.navigation.toggleDrawer()}
      />
    )
  }
}
const styles=StyleSheet.create({
    menuIcon:{
        position:'absolute',
        top:40,
        left:20,
        zIndex:9
    }
})