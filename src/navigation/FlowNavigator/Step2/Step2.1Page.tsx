import React, { FC } from "react";
import { Step21 } from "../../../pages/Step2.1";
import { Navigation } from "../../RootNavigator";
import { Step2StackParamList } from "./Step2Navigator";

interface Step21Props {
  navigation: Navigation<Step2StackParamList, "Step21">;
}

export const Step21Page: FC<Step21Props> = ({ navigation }) => {
  return <Step21 />;
};
