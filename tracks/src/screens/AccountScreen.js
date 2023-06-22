import React, { useContext } from 'react';
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons'

const AccountScreen = () => {
  const { signout } = useContext(AuthContext); // Update the action name to "signout"

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={18} />
}

const styles = StyleSheet.create({});

export default AccountScreen;
