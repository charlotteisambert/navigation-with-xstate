import React from "react";
import { Step1Navigator } from "./Step1Navigator/Step1Navigator";
import { Step2Navigator } from "./Step2/Step2Navigator";
import { Step3Navigator } from "./Step3/Step3Navigator";
import { Step4Navigator } from "./Step4/Step4Navigator";
import { FlowScreenProps, createFlowNavigator } from "./createFlowNavigator";
import { useQuery } from "react-query";
import { getHasToPassStep2, getHasToPassStep3 } from "../../queries";
import { ActivityIndicator } from "react-native";

export type FlowStackParamList = {
  Step1Navigator: undefined;
  Step2Navigator: undefined;
  Step3Navigator: undefined;
  Step4Navigator: undefined;
};

const FlowStack = createFlowNavigator<FlowStackParamList>();

export const FlowNavigator = () => {
  const { data: hasToPassStep2, isLoading: isStep2Loading } = useQuery(
    "hasToPassStep2",
    getHasToPassStep2
  );
  const { data: hasToPassStep3, isLoading: isStep3Loading } = useQuery(
    "hasToPassStep3",
    getHasToPassStep3
  );

  if (isStep2Loading || isStep3Loading) {
    return <ActivityIndicator />;
  }

  return (
    <FlowStack.Navigator initialRouteName="Step1Navigator">
      <FlowStack.Screen
        name="Step1Navigator"
        component={Step1Navigator}
        options={{ headerShown: false }}
      />
      {hasToPassStep2 && (
        <FlowStack.Screen
          name="Step2Navigator"
          component={Step2Navigator}
          options={{ headerShown: false }}
        />
      )}
      {hasToPassStep3 && (
        <FlowStack.Screen
          name="Step3Navigator"
          component={Step3Navigator}
          options={{ headerShown: false }}
        />
      )}
      <FlowStack.Screen
        name="Step4Navigator"
        component={Step4Navigator}
        options={{ headerShown: false }}
      />
    </FlowStack.Navigator>
  );
};
