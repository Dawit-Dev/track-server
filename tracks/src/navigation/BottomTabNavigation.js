import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TrackCreateScreen from "../screens/TrackCreateScreen";
import StackNavigator from "./StackNavigator";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {

  return (
    <Tab.Navigator>
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="trackListFlow" component={StackNavigator} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomTabNavigation;
