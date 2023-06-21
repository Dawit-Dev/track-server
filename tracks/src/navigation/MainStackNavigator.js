import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./BottomTabNavigation";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{ title: "Sign In" }}
        />
        <Stack.Screen name="mainFlow" component={BottomTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MainStackNavigator;