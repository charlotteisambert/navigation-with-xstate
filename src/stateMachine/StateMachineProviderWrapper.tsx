import { FC, ReactNode } from "react";
import { useQuery } from "react-query";
import { ActivityIndicator, View } from "react-native";

import { getHasToPassStep2, getHasToPassStep3 } from "../queries";

interface StateMachineMachineProviderWrapperProps {
  children: ReactNode;
}

export const StateMachineProviderWrapper: FC<
  StateMachineMachineProviderWrapperProps
> = ({ children }) => {
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

  return <>{children}</>
  ;
};
