import { useMachine } from "@xstate/react";
import { ReactNode, createContext } from "react";
import { StateMachine, StateFrom, Prop, InterpreterFrom } from "xstate";
import { NavigationProp, StackActions } from "@react-navigation/native";
import { FlowStateMachineContext, getFlowMachine } from "./stateMachine";
import { FlowStackParamList } from "../navigation/FlowNavigator/FlowNavigator";
import { useNavigation } from "@react-navigation/native";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Machine = StateMachine<FlowStateMachineContext, any, any>;

export const StateMachineContext = createContext<{
  value: StateFrom<Machine>["value"];
  send: Prop<InterpreterFrom<Machine>, "send">;
}>({
  value: "StateMachineForm",
  send: () => {
    console.error("[StateMachineContext] Missing context provider");
    throw new Error("[StateMachineContext] Missing context provider");
  },
});

interface StateMachineMachineProviderProps {
  children: ReactNode;
  hasToPassStep2: boolean;
}

export const StateMachineMachineProvider = ({
  children,
  hasToPassStep2,
}: StateMachineMachineProviderProps) => {
  const navigation = useNavigation<NavigationProp<FlowStackParamList>>();
  const [{ value }, send] = useMachine(() =>
    getFlowMachine({ navigation, hasToPassStep2 })
  );

  return (
    <StateMachineContext.Provider value={{ value, send }}>
      {children}
    </StateMachineContext.Provider>
  );
};
