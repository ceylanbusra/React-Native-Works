import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import {
  NavigationContainer,
  createAppContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from './SignupScreen';
import SignInScreen from './SigninScreen';

function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../Images/logo.png')} />
      <View style={styles.container21}>
        <Text style={styles.subtitle}> WELCOME </Text>
        <View style={styles.container1}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SigninScreen');
            }}>
            <Text style={styles.title}> Sign In </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
            <Text style={styles.title2}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: '25%',
    bottom: '5%',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'indigo',
  },
  subtitle: {
    fontSize: 30,
    fontWeight: '700',
    color: 'indigo',
    bottom: '15%',
  },

  textInput: {
    width: 300,
    height: 60,
    color: 'red',
    borderWidth: 2,
    borderRadius: 10,
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    height: '14%',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'white',
    marginTop: 10,
    backgroundColor: 'indigo',
    borderColor: 'white',
    top: 20,
    elevation: 5,
  },

  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    height: '14%',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'indigo',
    top: 30,
    marginTop: 10,
    backgroundColor: 'white',
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
  },
  title2: {
    fontSize: 22,
    fontWeight: '600',
    color: 'indigo',
  },
  container21: {
    marginTop: 10,
    width: '100%',
    height: '60%',
    alignItems: 'center',
    flexDirection: 'column',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
