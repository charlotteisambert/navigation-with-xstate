import { createMachine } from "xstate";
import { FlowStackParamList } from "../navigation/FlowNavigator/FlowNavigator";
import { NavigationProp, StackActions } from "@react-navigation/native";

export type FlowStateMachineContext = {
  hasToPassStep2: boolean;
  hasToPassStep3: boolean;
};

export type FlowStates = "step1" | "step2" | "step3" | "step4";

type GetFlowMachine = {
  navigation: NavigationProp<FlowStackParamList>;
  hasToPassStep2: boolean;
  hasToPassStep3: boolean;
};

export const getFlowMachine = ({
  navigation,
  hasToPassStep2,
  hasToPassStep3,
}: GetFlowMachine) =>
  createMachine<FlowStateMachineContext>(
    {
      predictableActionArguments: true,
      id: "FlowForm",
      initial: "step1",
      context: {
        hasToPassStep2,
        hasToPassStep3,
      },
      states: {
        step1: {
          on: {
            NEXT: [
              {
                target: "step2",
                cond: "hasToPassStep2",
                actions: [
                  () => {
                    navigation.navigate("Step2Navigator");
                  },
                ],
              },
              {
                target: "step3",
                cond: "hasToPassStep3",
                actions: [
                  () => {
                    navigation.navigate("Step3Navigator");
                  },
                ],
              },
              {
                target: "step4",
                actions: [
                  () => {
                    navigation.navigate("Step4Navigator");
                  },
                ],
              },
            ],
          },
        },
        step2: {
          on: {
            NEXT: [
              {
                target: "step3",
                cond: "hasToPassStep3",
                actions: [
                  () => {
                    navigation.navigate("Step3Navigator");
                  },
                ],
              },
              {
                target: "step4",
                actions: [
                  () => {
                    navigation.navigate("Step4Navigator");
                  },
                ],
              },
            ],
            BACK: {
              target: "step1",
            },
          },
        },
        step3: {
          on: {
            NEXT: {
              target: "step4",
              actions: [
                () => {
                  navigation.navigate("Step4Navigator");
                },
              ],
            },
            BACK: [
              {
                target: "step2",
                cond: "hasToPassStep2",
              },
              {
                target: "step1",
              },
            ],
          },
        },
        step4: {
          on: {
            BACK: [
              {
                target: "step3",
                cond: "hasToPassStep3",
              },
              {
                target: "step2",
                cond: "hasToPassStep2",
              },
              {
                target: "step1",
              },
            ],
          },
        },
      },
    },
    {
      guards: {
        hasToPassStep2: (context) => !!context.hasToPassStep2,
        hasToPassStep3: (context) => !!context.hasToPassStep3,
      },
    }
  );
