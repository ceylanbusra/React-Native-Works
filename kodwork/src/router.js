
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jobs from './pages/Jobs/Jobs';
import JobDetail from './pages/jobDetail/jobDetail';
import Reducer, { initial_state } from './redux/reducer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createStore,combineReducers } from "redux";
import FavPage from './pages/favPage/favPage';

const Stack = createNativeStackNavigator();

const reducers = combineReducers({
 Reducer
});

const store = createStore(reducers);

function Router() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='jobs'>
        <Stack.Screen name="Jobs" component={Jobs} />
        <Stack.Screen name="JobDetail" component={JobDetail} />
        <Stack.Screen name="FavPage" component={FavPage} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default Router;