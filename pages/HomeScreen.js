import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native';
import MenuButton from '../components/MenuButton';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Pemrograman Mobile Terapan",
    };
  }
  render() {
    return (
      <ImageBackground source={require('../assets/bghome.jpg')}style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
        <MenuButton navigation ={this.props.navigation}/>
          <Image style = {
            {
              borderRadius: 10,
              width: 350,
              height: 200,
              marginTop: 10,
            }
          }
          source = {
            require('../assets/img1.jpg')
          }/>

          <Text style={styles.text}>
            <Text>{this.state.titleText} </Text>        
          </Text>
          {/* <Text style={styles.text1}> */}
            <Text style={styles.text1}>adalah salah satu mata kuliah yang ada di 
            Program Pendidikan Vokasi Universitas Brawijaya.Tujan dari mata kuliah ini adalah mengenalkan kepada kita kepada salah satu framework javascript react native yang kita gunakan untuk mengembangkan aplikasi mobile yang mayoritasnya sangat di perlukan oleh web developer, performa dari react native ini jika dibandingkan dengan cordova / phonegap lebih unggul.Dengan React Native kita akan merasakan sensasi membuat aplikasi yang sangat mendekati bahkan tidak dapat dibedakan dengan dengan aplikasi native.React Native bekerja dengan dengan menanamkan file Javascript yang sudah di - bundle didalam aplikasi, dan menjalankan mereka secara local dari aplikasi yang kita buat </Text>
          {/* </Text> */}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  text:{
    margin: 10
  },
  text1: {
    justifyContent : 'center',
    margin: 10
  }
});
