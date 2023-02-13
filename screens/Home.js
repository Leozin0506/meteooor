import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea} />
        <ImageBackground
          source={require('../assets/bg_image.png')}
          style={styles.backgroundStyle}>
          <View style={styles.view}>
            <Text style={styles.title}> App Rastreador EEI </Text>
          </View>

          <TouchableOpacity
            style={styles.routeCards}
            onPress={() => this.props.navigation.navigate('IssLocation')}>
            <Text style={styles.routeText}>Localização da EEI</Text>
            <Text style={styles.link}> {'Saiba Mais'}</Text>
            <Text style={styles.numbers}>1</Text>
            <Image
              source={require('../assets/iss_icon.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCards}
            onPress={() => this.props.navigation.navigate('Meteors')}>
            <Text style={styles.routeText}>Meteoros</Text>
            <Text style={styles.link}> {'Saiba Mais'}</Text>
            <Text style={styles.numbers}>2</Text>
            <Image
              source={require('../assets/meteor_icon1.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  androidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'yellow',
  },

  view: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  routeCards: {
    flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
  },

  routeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 75,
    paddingLeft: 20,
  },

  backgroundStyle: {
    flex: 1,
    resizeMode: 'cover',
  },

  iconImage: {
    position: 'absolute',
    height: 200,
    width: 200,
    resizeMode: 'contain',
    right: 20,
    top: -80,
  },
  link: {
    paddingLeft: 30,
    color: 'red',
    size: 15,
  },
  numbers: {
    position: 'absolute',
    color: 'rgba(72, 61, 139, 0.5)',
    fontSize: 150,
    right: 20,
    bottom: -15,
    zIndex: -1,
  },
});
