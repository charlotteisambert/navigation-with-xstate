import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Step31Page } from "./Step3.1Page";
import { Step32Page } from "./Step3.2Page";

export type Step3StackParamList = { Step31: undefined; Step32: undefined };

const Step3Stack = createNativeStackNavigator<Step3StackParamList>();

export const Step3Navigator = () => {
  return (
    <Step3Stack.Navigator initialRouteName="Step31">
      <Step3Stack.Screen
        name="Step31"
        component={Step31Page}
        options={{ headerShown: false }}
      />
      <Step3Stack.Screen
        name="Step32"
        component={Step32Page}
        options={{ headerShown: false }}
      />
    </Step3Stack.Navigator>
  );
};
