import { AnyEventObject, assign, createMachine } from "xstate";

export type FlowStateMachineContext = {
  hasToPassStep2: boolean;
  hasToPassStep3: boolean;
};

export type FlowStates = "step1" | "step2" | "step3" | "step4";

type GetFlowMachine = {
  hasToPassStep2: boolean;
  hasToPassStep3: boolean;
};

const updateStep2 = assign<FlowStateMachineContext, AnyEventObject>({
  hasToPassStep2: (_: FlowStateMachineContext, event: AnyEventObject) =>
    event.hasToPassStep2,
});

const updateStep3 = assign<FlowStateMachineContext, AnyEventObject>({
  hasToPassStep3: (_: FlowStateMachineContext, event: AnyEventObject) =>
    event.hasToPassStep3,
});

export const getFlowMachine = ({
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
      on: {
        STEP_2_CHANGE: {
          actions: updateStep2,
        },
        STEP_3_CHANGE: {
          actions: updateStep3,
        },
      },
      states: {
        step1: {
          on: {
            NEXT: [
              {
                target: "step2",
                cond: "hasToPassStep2",
              },
              {
                target: "step3",
                cond: "hasToPassStep3",
              },
              {
                target: "step4",
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
              },
              {
                target: "step4",
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
            },
            BACK: {
              target: "step1",
            },
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
                target: "step1",
              },
            ],
          },
        },
      },
    },
    {
      actions: {
        updateStep2,
      },
      guards: {
        hasToPassStep2: (context) => {
          console.log("context.hasToPassStep2", context.hasToPassStep2);
          return context.hasToPassStep2;
        },
        hasToPassStep3: (context) => context.hasToPassStep3,
      },
    }
  );
