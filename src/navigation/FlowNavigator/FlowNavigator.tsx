import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Step1Navigator } from "./Step1Navigator/Step1Navigator";
import { Step2Navigator } from "./Step2/Step2Navigator";
import { StateMachineMachineProvider } from "../../stateMachine/StateMachineProvider";
import { Step3Navigator } from "./Step3/Step3Navigator";
import { Step4Navigator } from "./Step4/Step4Navigator";

export type FlowStackParamList = {
  Step1Navigator: undefined;
  Step2Navigator: undefined;
  Step3Navigator: undefined;
  Step4Navigator: undefined;
};

const FlowStack = createNativeStackNavigator<FlowStackParamList>();

export const FlowNavigator = () => {
  return (
    <StateMachineMachineProvider hasToPassStep2={true}>
      <FlowStack.Navigator initialRouteName="Step1Navigator">
        <FlowStack.Screen
          name="Step1Navigator"
          component={Step1Navigator}
          options={{ headerShown: false }}
        />
        <FlowStack.Screen
          name="Step2Navigator"
          component={Step2Navigator}
          options={{ headerShown: false }}
        />
        <FlowStack.Screen
          name="Step3Navigator"
          component={Step3Navigator}
          options={{ headerShown: false }}
        />
        <FlowStack.Screen
          name="Step4Navigator"
          component={Step4Navigator}
          options={{ headerShown: false }}
        />
      </FlowStack.Navigator>
    </StateMachineMachineProvider>
  );
};
