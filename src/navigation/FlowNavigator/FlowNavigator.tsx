import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Step1Navigator } from "./Step1Navigator/Step1Navigator";
import { Step2Navigator } from "./Step2/Step2Navigator";
import { StateMachineContext, StateMachineMachineProvider } from "../../stateMachine/StateMachineProvider";
import { Step3Navigator } from "./Step3/Step3Navigator";
import { Step4Navigator } from "./Step4/Step4Navigator";
import { StateMachineProviderWrapper } from "../../stateMachine/StateMachineProviderWrapper";
import React, { useContext } from "react";

export type FlowStackParamList = {
  Step1Navigator: undefined;
  Step2Navigator: undefined;
  Step3Navigator: undefined;
  Step4Navigator: undefined;
};

const FlowStack = createNativeStackNavigator<FlowStackParamList>();

export const FlowNavigator = () => {
  return (
    <StateMachineProviderWrapper>
      <FlowPages />
    </StateMachineProviderWrapper>
  );
};


const FlowPages = () => {
  const { value } = useContext(StateMachineContext);

  switch(value){
    case 'step1':
      return <Step1Navigator/>
    case 'step2':
      return <Step2Navigator/>
    case 'step3':
      return <Step3Navigator/>
    case 'step4':
      return <Step4Navigator/>
  }
}
