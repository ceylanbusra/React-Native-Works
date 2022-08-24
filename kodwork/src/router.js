import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Jobs from "./pages/Jobs/Jobs";
import JobDetail from "./pages/jobDetail/jobDetail";
import Reducer, { initial_state } from "./redux/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import FavPage from "./pages/favPage/favPage";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const reducers = combineReducers({
 Reducer,
});

const store = createStore(reducers);

function Router() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    useLegacyImplementation={true}
      screenOptions={{
        drawerActiveTintColor: "#FF5C58",
      }}
    >
      <Drawer.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          headerShown: false,
          title: "Jobs",
        }}
      />
      <Drawer.Screen
        name="FavPage"
        component={FavPage}
        options={{ title: "Favorited Jobs", headerTintColor: "#FF5C58" }}
      />
    </Drawer.Navigator>
  );
};

const  StackNavigator =()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jobs"
        component={Jobs}
        options={{ title: "Jobs", headerTintColor: "#FF5C58" }}
      />
      <Stack.Screen
        name="JobDetail"
        component={JobDetail}
        options={({ route }) => ({
          title: route.params.name,
          headerTintColor: "#FF5C58",
        })}
      />
    </Stack.Navigator>
  );
}

export default Router;
