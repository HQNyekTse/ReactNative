import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MenuButton from '../components/MenuButton';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View>
        <MenuButton style={styles.container} navigation ={this.props.navigation}/>
        <Image style = {
          {
            borderRadius: 20,
            width: 350,
            height: 300,
            marginLeft : 22,
            marginTop: 100,
          }
        }
        source = {
          require('../assets/7953.jpg')
        }/>
        <View style={styles.container}>
          <Text style={styles.text}>
            <Text style={styles.nama}> Muhibbuddin Al Haqqi </Text>
            <Text> 173140714111043 </Text> 
          </Text>

          <Text style={styles.text}>
            <Text style={styles.nama}> Yosy Dzulfiary Ibrahim </Text>
            <Text> 173140714111053 </Text> 
          </Text>

          <Text style={styles.text}>
            <Text style={styles.nama}> Ardy Ilhamsyah Lukman P.P </Text>
            <Text> 173140714111061 </Text> 
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  text:{
      margin: 20,
      marginTop: 20,
      fontSize:15
  },
  textA: {
    margin: 20,
    marginTop: 150,
    fontSize: 15
  },
  textB: {
    margin: 20,
    marginTop: 200,
    fontSize: 15
  },
  nama:{
    fontSize: 25,
  }
});
