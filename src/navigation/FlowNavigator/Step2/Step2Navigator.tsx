import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Step21Page } from "./Step2.1Page";

export type Step1StackParamList = { Step21: undefined };

const Step1Stack = createNativeStackNavigator<Step1StackParamList>();

export const Step2Navigator = () => {
  return (
    <Step1Stack.Navigator initialRouteName="Step21">
      <Step1Stack.Screen
        name="Step21"
        component={Step21Page}
        options={{ headerShown: false }}
      />
    </Step1Stack.Navigator>
  );
};
