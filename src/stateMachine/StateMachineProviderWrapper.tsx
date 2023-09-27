import { FC, ReactNode } from "react";
import { StateMachineMachineProvider } from "./StateMachineProvider";
import { useQuery } from "react-query";
import { ActivityIndicator, View } from "react-native";

import { getHasToPassStep2 } from "../queries";

interface StateMachineMachineProviderWrapperProps {
  children: ReactNode;
}

export const StateMachineProviderWrapper: FC<
  StateMachineMachineProviderWrapperProps
> = ({ children }) => {
  const { data, isLoading } = useQuery("hasToPassStep2", getHasToPassStep2);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <StateMachineMachineProvider hasToPassStep2={data} hasToPassStep3={false}>
      {children}
    </StateMachineMachineProvider>
  );
};
