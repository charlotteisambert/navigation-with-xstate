import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Step2StackParamList } from "../navigation/FlowNavigator/Step2/Step2Navigator";
import React from "react";
import { FlowNavigationProp } from "../navigation/FlowNavigator/createFlowNavigator";

export const Step21 = () => {
  const navigation = useNavigation<FlowNavigationProp<Step2StackParamList>>();

  const goToNext = () => {
    navigation.navigate("Step22");
  };

  const goBack = () => {
    navigation.goPreviousStep()
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
