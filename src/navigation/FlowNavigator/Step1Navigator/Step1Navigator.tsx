import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Step11 from "../../../pages/Step1.1";

export type Step1StackParamList = { Step11: undefined };

const Step1Stack = createNativeStackNavigator<Step1StackParamList>();

export const Step1Navigator = () => {
  return (
    <Step1Stack.Navigator initialRouteName="Step11">
      <Step1Stack.Screen
        name="Step11"
        component={Step11}
        options={{ headerShown: false }}
      />
    </Step1Stack.Navigator>
  );
};
