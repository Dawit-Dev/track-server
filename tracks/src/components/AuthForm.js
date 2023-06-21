import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AuthForm = ({
  headerText,
  errorMessage,
  onSubmit,
  submitButtonText,
  navigation,
}) => {
  const { state } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => {
            onSubmit({ email, password });
            if (state.token) {
              navigation.navigate("mainFlow");
              setEmail("");
              setPassword("");
            }
          }}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 18,
    color: "red",
    marginLeft: 15,
  },
});

export default AuthForm;
