import React from "react";
import { StyleSheet, View } from "react-native";

const Spacer = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    marginLeft: 12,
    marginRight: 12
  },
});

export default Spacer;
