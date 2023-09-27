import React, { FC } from "react";
import { Step22 } from "../../../pages/Step2.2";
import { Navigation } from "../../RootNavigator";
import { Step2StackParamList } from "./Step2Navigator";

interface Step22Props {
  navigation: Navigation<Step2StackParamList, "Step22">;
}

export const Step22Page: FC<Step22Props> = ({ navigation }) => {
  return <Step22 />;
};
