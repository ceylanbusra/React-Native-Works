
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Secondary from '../screen/Secondary';
import Primary from '../screen/Primary';

const Tab = createBottomTabNavigator();
const Router = () => {
  return(
      <NavigationContainer>
        <Tab.Navigator 
        screenOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'white',
          tabBarStyle:{backgroundColor:'#7174d0' }
          
        }} 
       
        >
          <Tab.Screen name="Primary" component={Primary} />
          <Tab.Screen name="Secondary" component={Secondary} />
        </Tab.Navigator>
      </NavigationContainer>
    
  );
};
export default Router;
