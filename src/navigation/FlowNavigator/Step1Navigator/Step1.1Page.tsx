import React, { FC } from "react";
import Step11 from "../../../pages/Step1.1";
import { Navigation } from "../../RootNavigator";
import { Step1StackParamList } from "./Step1Navigator";

interface Step11Props {
  navigation: Navigation<Step1StackParamList, "Step11">;
}

export const Step11Page: FC<Step11Props> = ({ navigation }) => {
  return <Step11 />;
};
