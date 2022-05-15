import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DevScreen from "./DevScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { View } from "react-native";

const Tab = createMaterialBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused, color }) => {
    //     return <Ionicons name={"cafe"} size={25} color={color} />;
    //   },
    // })}
    >
      <Tab.Screen name="Dev" component={DevStackContainer} />
    </Tab.Navigator>
  );
}

const DevStack = createNativeStackNavigator();

function DevStackContainer({ route }) {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <DevStack.Navigator>
        <DevStack.Screen
          name="DevScreen"
          component={DevScreen}
          options={{ title: "Dev" }}
        />
      </DevStack.Navigator>
    </View>
  );
}

const TestNavigationContainer = (props) => {
  return (
    <NavigationContainer>
      <MainTabNavigator></MainTabNavigator>
    </NavigationContainer>
  );
};

export default TestNavigationContainer;
