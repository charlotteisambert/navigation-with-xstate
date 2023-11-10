import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Step2StackParamList } from "../navigation/FlowNavigator/Step2/Step2Navigator";
import { useMutation, useQueryClient } from "react-query";
import { postPassedStep2 } from "../queries";
import {
  FlowNavigationProp,
  useFlow,
} from "../navigation/FlowNavigator/createFlowNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlowStackParamList } from "../navigation/FlowNavigator/FlowNavigator";

export const Step22 = () => {
  const { goBack } =
    useNavigation<NativeStackNavigationProp<Step2StackParamList>>();

  const { goNextStep } = useFlow();

  const queryClient = useQueryClient();
  const { mutate } = useMutation("postHasToPassStep2", postPassedStep2, {
    onSuccess: () => {
      queryClient.invalidateQueries("hasToPassStep2");
      goNextStep();
    },
  });

  const onNextPress = () => {
    mutate();
  };

  const onBackPress = () => {
    goBack();
  };

  const { canGoPreviousStep, canGoNextStep, currentStep, progress } = useFlow();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Step 2.2</Text>
      <Text style={{ fontSize: 30 }}>progress: {progress}</Text>
      <Text style={{ fontSize: 30 }}>CurrentStep: {currentStep}</Text>
      <Text style={{ fontSize: 30 }}>
        canGoPreviousStep: {`${canGoPreviousStep}`}
      </Text>
      <Text style={{ fontSize: 30 }}>canGoNextStep: {`${canGoNextStep}`}</Text>
      <Button title="next" onPress={onNextPress} />
      <Button title="back" onPress={onBackPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
