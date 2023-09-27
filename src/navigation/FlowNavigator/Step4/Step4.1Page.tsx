import React, { FC } from "react";
import { Step41 } from "../../../pages/Step4.1";
import { Navigation } from "../../RootNavigator";
import { Step4StackParamList } from "./Step4Navigator";

interface Step41Props {
  navigation: Navigation<Step4StackParamList, "Step41">;
}

export const Step41Page: FC<Step41Props> = ({ navigation }) => {
  return <Step41 />;
};
