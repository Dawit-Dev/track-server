import React from "react";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";

const App = () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <MainStackNavigator />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};

export default App;
