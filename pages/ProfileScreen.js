import React from 'react';
import{ImagePicker,Permissions} from 'expo';
import MenuButton from '../components/MenuButton';

import{Platform,
    Image,Dimensions,
    StyleSheet,View,
    Text,TouchableOpacity
    ,ImageBackground
    } from 'react-native';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class ProfileScreen extends React.Component{

    constructor(props){
        super(props)
        this.state={
            image:'http://bit.ly/gbr-pisang',
            imagea: 'http://bit.ly/gbr-pisang',
            imageb: 'http://bit.ly/gbr-pisang',
            hasCameraPermission:null,
            hasCameraRollPermission:null,
            photoUrl: null,
        }
    }
    //kamera
  async componentWillMount(){
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission:status === 'granted'});

    const {statusCameraRoll} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({hasCameraRollPermission:statusCameraRoll === 'granted'});
  }

    navLink(nav,text){
        return(
            <TouchableOpacity style={{height: 50}} onPress={() => this.props.navigation.navigate(nav)}>
            <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }

    _pickImage = async ()=>{
            let result = await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[1, 1],
        });
        if (!result.cancelled){
            this.setState({ image:result.uri});
        }
    };
    _pickImagea = async ()=>{
            let resulta = await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[1, 1],
        });
        if (!resulta.cancelled){
            this.setState({ imagea:resulta.uri});
        }
    };
    _pickImageb = async ()=>{
            let resultb = await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[1, 1],
        });
        if (!resultb.cancelled){
            this.setState({ imageb:resultb.uri});
        }
    };

    render(){
        return(
          <ImageBackground source={require('../assets/bgprofile.jpg')}style={{width: '100%', height: '100%'}}>
          <View style={styles.container}>
              <MenuButton navigation ={this.props.navigation}/>
              <View style={styles.profile}>
                <TouchableOpacity style={styles.imgView} onPress={this._pickImage}>
                  < Image style = {{ borderRadius: 10, width: 350, height: 200, marginTop : 30, }} source = {{ uri: this.state.image }}/>
                </TouchableOpacity>
              </View>
              
              <View style={styles.profile}>
                <TouchableOpacity style={styles.imgView} onPress={this._pickImagea}>
                  <Image style= {{ borderRadius: 10, width: 350, height: 200, marginTop : 18,}} source={{uri:this.state.imagea}}/>
                </TouchableOpacity>
              </View>

              <View style={styles.profile}>
                <TouchableOpacity style={styles.imgView} onPress={this._pickImageb}>
                  <Image style= {{ borderRadius: 10, width: 350, height: 200, }} source={{uri:this.state.imageb}}/>
                </TouchableOpacity>
              </View>
          </View>
          </ImageBackground>  
        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'lightgray',
    },
    profile:{
        flex:1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 50,
    },
    imgView: {
      flex: 1,
      paddingLeft: 20,
      paddingRight: 20,
      // marginTop:30,
    },
})