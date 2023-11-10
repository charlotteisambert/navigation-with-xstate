import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Step2StackParamList } from "../navigation/FlowNavigator/Step2/Step2Navigator";
import { useMutation } from "react-query";
import { postPassedStep2 } from "../queries";
import { FlowNavigationProp } from "../navigation/FlowNavigator/createFlowNavigator";

export const Step22 = () => {
  const navigation = useNavigation<FlowNavigationProp<Step2StackParamList>>();

  const { mutate } = useMutation("postHasToPassStep2", postPassedStep2, {
    onSuccess: () => {
      navigation.goNextStep();
    },
  });

  const onNextPress = () => {
    mutate();
  };

  const goBack = () => {
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Step 2.2</Text>
      <Button title="next" onPress={onNextPress} />
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
