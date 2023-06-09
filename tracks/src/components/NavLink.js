import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
// import { withNavigation } from "@react-navigation/native";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.link}>{text}</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
    fontSize: 15,
    marginTop: 9,
  },
});

export default NavLink;
