import React, { FC } from "react";
import { Step32 } from "../../../pages/Step3.2";
import { Navigation } from "../../RootNavigator";
import { Step3StackParamList } from "./Step3Navigator";

interface Step32Props {
  navigation: Navigation<Step3StackParamList, "Step32">;
}

export const Step32Page: FC<Step32Props> = ({ navigation }) => {
  return <Step32 />;
};
