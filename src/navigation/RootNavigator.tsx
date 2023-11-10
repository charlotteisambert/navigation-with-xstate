import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./pages/HomePage";
import { useNavigationContainerRef } from "@react-navigation/core";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlowNavigator } from "./FlowNavigator/FlowNavigator";

export type Navigation<
  Navigator extends ParamListBase,
  Screen extends keyof Navigator
> = NativeStackScreenProps<Navigator, Screen>["navigation"];

export type RootStackParamList = {
  Home: undefined;
  Flow: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const navigationRef = useNavigationContainerRef<RootStackParamList>();

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Flow"
          component={FlowNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

