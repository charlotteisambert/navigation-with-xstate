import { Button, StyleSheet, Text, View } from "react-native";
import {  NavigationProp, useNavigation } from "@react-navigation/native";
import { Step3StackParamList } from "../navigation/FlowNavigator/Step3/Step3Navigator";
import { FlowNavigationProp } from "../navigation/FlowNavigator/createFlowNavigator";
import { FlowStackParamList } from "../navigation/FlowNavigator/FlowNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const Step32 = () => {
  const {goNextStep} = useNavigation<FlowNavigationProp<FlowStackParamList> & NativeStackNavigationProp<Step3StackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize:30}}>Step 3.2</Text>
      <Button title="next" onPress={() => goNextStep()} />
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
