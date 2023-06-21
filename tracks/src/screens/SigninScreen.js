import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
// import { NavigationEvents } from "@react-navigation/native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../context/AuthContext";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(Context);

  useEffect(() => {
    const clearError = () => {
      clearErrorMessage();
    }
    return clearError;
  }, [navigation])

  return (
    <View style={styles.container}>
      {/* <NavigationEvents
        onWillBlur={clearErrorMessage}
      /> */}
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="sign In"
        navigation={navigation}
      />
      <NavLink
        text="Don't have an account? Sign up instead"
        routeName="Signup"
        navigation={navigation}
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false,
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

export default SigninScreen;
