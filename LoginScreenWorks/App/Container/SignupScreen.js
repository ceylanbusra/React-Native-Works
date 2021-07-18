import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
} from 'react-native';

function SignupScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.image} source={require('../Images/logo.png')} />
      <TextInput
        style={styles.input}
        placeholder="Name-Surname"
        placeholderTextColor="indigo"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Number"
        placeholderTextColor="indigo"
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="indigo"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="indigo"
        secureTextEntry={true}
      />
      <View style={styles.button}>
        <TouchableOpacity onPress={() => alert('Sign up butonuna bastın')}>
          <Text style={styles.title2}> Sign Up </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default SignupScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'indigo',

    alignItems: 'center', //yatayda ortalıyor.
    justifyContent: 'center', //dikeyde ortalıyor.

    // alignItems: 'center', //yatayda ortalıyor.
    //flexDirection: 'column-reverse',
  },

  image: {
    width: 150,
    height: 150,
  },
  input: {
    marginTop: 20,
    height: 50,
    width: 350,
    margin: 10,
    top: 10,
    bottom: 5,
    borderBottomWidth: 1,
    borderRadius: 15,
    backgroundColor: 'white',
    opacity: 0.8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 350,
    margin: 10,
    top: 20,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'white',

    backgroundColor: 'indigo',
    elevation: 5,
  },
  subtitle: {
    color: 'white',
    fontSize: 24,
  },
  title2: {
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
  },
});
