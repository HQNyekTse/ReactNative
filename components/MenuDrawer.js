import React, { Component } from 'react'
import { Text, View, Platform, Dimensions, StyleSheet, TouchableOpacity, Image, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import firebase from "firebase";
import { ImagePicker, Permissions } from 'expo';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class MenuDrawer extends Component {
    constructor(props){
        super(props)
        this.state = {
            image: 'http://bit.ly/gbr-pisang',
            hasCameraPermission: null,
            hasCameraRollPermission: null,
        }
    }

    async componentWillMount(){
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasCameraPermission:status==='granted' });
      const { statusCameraRoll } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      this.setState({ hasCameraRollPermission: statusCameraRoll === 'granted' });
  }

  _pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [ 1 , 1 ],
      });
      if ( !result.cancelled ) {
          this.setState({ image: result.uri })
      }
  };
  navLink(nav, text) {
      return(
          <TouchableOpacity style={{height: 50}} onPress={()=>this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
          </TouchableOpacity>
      )
  } 
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroller}>
            <View style={styles.topLinks}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.imgView} onPress={this._pickImage}>
                            <Image style={styles.img} source={{ uri: this.state.image }}/>
                    </TouchableOpacity>
                    < View style={styles.profileText}>
                        <Text style={styles.name}> Dr. H. Ardy Dzulfiary Al Haqqi. M.Si </Text> 
                    </View>
                </View>
            </View>
            <View style={styles.bottomLinks}>
                {this.navLink('Profile','Profile')}        
                {this.navLink('Todo','Todo')}
                {this.navLink('Map','Maps')}
            </View>
        </ScrollView> 
        <Button title="sign out" onPress={this._signoutAsyn}/>   

        <View style={styles.footer}>
            <Text style={styles.description}>UAS React</Text>
            <Text style={styles.version}>v1.0</Text>
        </View> 
      </View>
    )
  }

  _signoutAsyn = () => {
      firebase.auth().signOut().then(function () {
          this.props.navigation.navigate('auth');
      }).catch(function (error) {
          console.log(error)
      });

  };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    topLinks: {
        height: 160,
        backgroundColor: 'black',
    },
    bottomLinks: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 450,
    },
    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left',
    },
    profile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#777777',
    },
    profileText:{
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    name:{
        fontSize: 20,
        paddingBottom: 5,
        color: 'white',
        textAlign: 'left',
    },
    imgView:{
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    img: {
        height: 70,
        width: 70,
        borderRadius: 50,
    },
    footer: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
    },
    description: {
        flex: 1,
        marginLeft: 20,
        fontSize: 16,
    },
    version: {
        flex: 1,
        textAlign: 'right',
        marginRight: 20,
        color: 'gray',
    },
    scroller: {
        flex: 1
    }
})