import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Step3StackParamList } from "../navigation/FlowNavigator/Step3/Step3Navigator";
import { send } from "xstate";
import React from "react";

export const Step31 = () => {
  const navigation = useNavigation<NavigationProp<Step3StackParamList>>();

  const goToNext = () => {
    navigation.navigate("Step32");
  };

  const goBack = () => {
    send("BACK");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize:30}}>Step 3.1</Text>
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
