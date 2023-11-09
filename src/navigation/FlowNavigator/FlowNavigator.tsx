import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Step1Navigator } from "./Step1Navigator/Step1Navigator";
import { Step2Navigator } from "./Step2/Step2Navigator";
import {
  StateMachineContext,
  StateMachineMachineProvider,
} from "../../stateMachine/StateMachineProvider";
import { Step3Navigator } from "./Step3/Step3Navigator";
import { Step4Navigator } from "./Step4/Step4Navigator";
import { StateMachineProviderWrapper } from "../../stateMachine/StateMachineProviderWrapper";
import React, { useContext, useEffect } from "react";
import {
  NavigationProp,
  StackRouter,
  useNavigation,
} from "@react-navigation/native";
import { createFlowNavigator } from "./createFlowNavigator";
import Step11 from "../../pages/Step1.1";

export type FlowStackParamList = {
  Step1Navigator: undefined;
  Step2Navigator: undefined;
  Step3Navigator: undefined;
  Step4Navigator: undefined;
};

const FlowStack = createFlowNavigator<FlowStackParamList>();

export const FlowNavigator = () => {
  return (
    <StateMachineProviderWrapper>
      <FlowPages />
    </StateMachineProviderWrapper>
  );
};

const PageNameByStep = {
  step1: "Step1Navigator",
  step2: "Step2Navigator",
  step3: "Step3Navigator",
  step4: "Step4Navigator",
};

export const FlowPages = () => {
  const { value } = useContext(StateMachineContext);
  return (
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
  );
};
