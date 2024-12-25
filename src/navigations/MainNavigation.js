import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileFirstScreen from "../screens/ProfileFirstScreen";
import AddItemScreen from "../screens/AddItemScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "purple",
      tabBarInactiveTintColor: "black",
      tabBarStyle: {
        backgroundColor: "white",
        borderTopWidth: 1,
        borderRadius: 20,
        padding: 10,
        margin: 5,
        height: 90,

      },
    }}
  >
   
    <Tab.Screen 
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Add Item"
      component={AddItemScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="plus-box" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileFirstScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
 
  </Tab.Navigator>
  );
};

export default MainNavigation;




