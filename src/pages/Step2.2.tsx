import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Step2StackParamList } from "../navigation/FlowNavigator/Step2/Step2Navigator";
import { useMutation } from "react-query";
import { postPassedStep2 } from "../queries";

export const Step22 = () => {
  const navigation = useNavigation<NavigationProp<Step2StackParamList>>();
  const { dispatch } = useNavigation();

  const { mutate } = useMutation("postHasToPassStep2", postPassedStep2, {
    onSuccess: () => {
      dispatch({ type: "NEXT" });
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
