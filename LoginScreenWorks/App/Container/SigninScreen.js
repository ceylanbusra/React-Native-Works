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

function SigninScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../Images/logo.png')} />
      <View>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="white"
          keyboardType="email-address"
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="white"
        secureTextEntry={true}
      />
      <View style={styles.button}>
        <TouchableOpacity onPress={() => alert('Sign In butonuna bastın')}>
          <Text style={styles.title2}> Sign In </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '85%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center', //yatayda ortalıyor.
    justifyContent: 'center', //dikeyde ortalıyor.
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 50,
    alignItems: 'center',
  },
  input: {
    fontSize: 14,
    marginTop: 20,
    height: 50,
    width: 350,
    margin: 20,
    top: 20,
    borderBottomWidth: 1,
    borderRadius: 15,
    backgroundColor: 'indigo',
    opacity: 0.7,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 350,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'white',
    top: 30,
    marginTop: 10,
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
