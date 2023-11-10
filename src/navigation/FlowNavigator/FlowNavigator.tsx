import React from "react";
import { Step1Navigator } from "./Step1Navigator/Step1Navigator";
import { Step2Navigator } from "./Step2/Step2Navigator";
import { Step3Navigator } from "./Step3/Step3Navigator";
import { Step4Navigator } from "./Step4/Step4Navigator";
import { FlowScreenProps, createFlowNavigator } from "./createFlowNavigator";
import { useQuery } from "react-query";
import { getHasToPassStep2, getHasToPassStep3 } from "../../queries";
import { ActivityIndicator } from "react-native";
import Step11 from "../../pages/Step1.1";
import { Step21Page } from "./Step2/Step2.1Page";
import { Step22Page } from "./Step2/Step2.2Page";

export type FlowStackParamList = {
  Step11: undefined;
  Step21: undefined;
  Step22: undefined;
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
    <FlowStack.Navigator initialRouteName="Step11">
      <FlowStack.Group
        // name="Step1Navigator"
        key="toto"
        navigationKey="toto"
        screenOptions={({ route, navigation }) => ({
          title: "toto",
        })}
      >
        <FlowStack.Screen
          name="Step11"
          navigationKey="Step11"
          component={Step11}
          options={{ headerShown: false }}
        />
      </FlowStack.Group>
      {hasToPassStep2 && (
        <FlowStack.Group>
          <FlowStack.Screen
            name="Step21"
            component={Step21Page}
            options={{ headerShown: false }}
          />
          <FlowStack.Screen
            name="Step22"
            component={Step22Page}
            options={{ headerShown: false }}
          />
        </FlowStack.Group>
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
