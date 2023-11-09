import React, { FC } from "react";
import { Step31 } from "../../../pages/Step3.1";
import { Navigation } from "../../RootNavigator";
import { Step3StackParamList } from "./Step3Navigator";

interface Step31Props {
  navigation: Navigation<Step3StackParamList, "Step31">;
}

export const Step31Page: FC<Step31Props> = ({ navigation }) => {
  return <Step31 />;
};
