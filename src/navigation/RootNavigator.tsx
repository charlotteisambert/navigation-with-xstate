import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./pages/HomePage";
import { useNavigationContainerRef } from "@react-navigation/core";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";

export type RootStackParamList = { Home: undefined };

const AuthenticatedStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const navigationRef = useNavigationContainerRef<RootStackParamList>();

  return (
    <NavigationContainer ref={navigationRef}>
      <AuthenticatedStack.Navigator initialRouteName="Home">
        <AuthenticatedStack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
      </AuthenticatedStack.Navigator>
    </NavigationContainer>
  );
};
