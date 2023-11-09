import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Step2StackParamList } from "../navigation/FlowNavigator/Step2/Step2Navigator";
import { send } from "xstate";
import React from "react";

export const Step21 = () => {
  const navigation = useNavigation<NavigationProp<Step2StackParamList>>();

  const goToNext = () => {
    navigation.navigate("Step22");
  };

  const goBack = () => {
    send("BACK")
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize:30}}>Step 2.1</Text>
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
