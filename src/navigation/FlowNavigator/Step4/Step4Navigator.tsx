import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Step41Page } from "./Step4.1Page";

export type Step4StackParamList = { Step41: undefined };

const Step4Stack = createNativeStackNavigator<Step4StackParamList>();

export const Step4Navigator = () => {
  return (
    <Step4Stack.Navigator initialRouteName="Step41">
      <Step4Stack.Screen
        name="Step41"
        component={Step41Page}
        options={{ headerShown: false }}
      />
    </Step4Stack.Navigator>
  );
};
