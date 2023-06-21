import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
// import { NavigationEvents } from "@react-navigation/native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } =
    useContext(AuthContext);
  
  useEffect(() => {
    const clearError = () => {
      clearErrorMessage()
    }
    return clearError;
  }, [navigation])

  return (
    <View style={styles.container}>
      {/* <NavigationEvents onWillBlur={clearErrorMessage} /> */}
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
        navigation={navigation}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead"
        navigation={navigation}
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    // borderColor: 'red',
    // borderWidth: 9,
    flex: 1,
    justifyContent: "center",
    marginBottom: 90,
  },
});

export default SignupScreen;