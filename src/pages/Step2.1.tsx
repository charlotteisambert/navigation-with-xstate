import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Step2StackParamList } from "../navigation/FlowNavigator/Step2/Step2Navigator";
import React from "react";
import { FlowNavigationProp } from "../navigation/FlowNavigator/createFlowNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlowStackParamList } from "../navigation/FlowNavigator/FlowNavigator";

export const Step21 = () => {
  const { goPreviousStep, navigate } = useNavigation<
    FlowNavigationProp<FlowStackParamList> &
      NativeStackNavigationProp<Step2StackParamList>
  >();
  const goToNext = () => {
    navigate("Step22");
  };

  const goBack = () => {
    goPreviousStep();
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Step 2.1</Text>
      <Button title="next" onPress={goToNext} />
      <Button title="back" onPress={goBack} />
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
