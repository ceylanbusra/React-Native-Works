import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from './App/Container/DetailScreen';
import HomeScreen from './App/Container/HomeScreen';
import SigninScreen from './App/Container/SigninScreen';
import SignupScreen from './App/Container/SignupScreen';
import WelcomeScreen from './App/Container/WelcomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="WelcomeScreen"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SigninScreen"
          component={SigninScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignupScreen"
          component={SignupScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
