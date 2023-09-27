import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Step1Navigator } from "./Step1Navigator/Step1Navigator";

export type FlowStackParamList = { Step1Navigator: undefined };

const FlowStack = createNativeStackNavigator<FlowStackParamList>();

export const FlowNavigator = () => {
  return (
    <FlowStack.Navigator initialRouteName="Step1Navigator">
      <FlowStack.Screen
        name="Step1Navigator"
        component={Step1Navigator}
        options={{ headerShown: false }}
      />
    </FlowStack.Navigator>
  );
};
