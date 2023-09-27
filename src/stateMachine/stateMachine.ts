import { createMachine } from "xstate";
import { FlowStackParamList } from "../navigation/FlowNavigator/FlowNavigator";
import { NavigationProp, StackActions } from "@react-navigation/native";

export type FlowStateMachineContext = {
  hasToPassStep2: boolean;
};

export type FlowStates = "step1" | "step2" | "step3" | "step4";

type GetFlowMachine = {
  hasToPassStep2: boolean;
  navigation: NavigationProp<FlowStackParamList>;
};

export const getFlowMachine = ({
  hasToPassStep2,
  navigation,
}: GetFlowMachine) =>
  createMachine<FlowStateMachineContext>({
    predictableActionArguments: true,
    id: "FlowForm",
    initial: "step1",
    context: {
      hasToPassStep2,
    },
    states: {
      step1: {
        on: {
          NEXT: {
            target: "step2",
            actions: [
              () => {
                navigation.navigate("Step2Navigator");
              },
            ],
          },
        },
      },
      step2: {
        on: {
          BACK: {
            target: "step1",
          },
        },
      },
      step3: {},
      step4: {},
    },
  });
