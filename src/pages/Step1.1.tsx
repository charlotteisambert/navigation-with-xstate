import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FlowNavigationProp,
  useFlow,
} from "../navigation/FlowNavigator/createFlowNavigator";
import { FlowStackParamList } from "../navigation/FlowNavigator/FlowNavigator";

export default function Step11() {
  const { canGoPreviousStep, canGoNextStep, currentStep, progress, goNextStep  } = useFlow();

  return (
    <View style={styles.container}>
      <TextInput style={{ backgroundColor: "#DDDDDD", width: "70%" }} />
      <Text style={{ fontSize: 30 }}>Step 1.1</Text>
      <Text style={{ fontSize: 30 }}>progress: {progress}</Text>
      <Text style={{ fontSize: 30 }}>CurrentStep: {currentStep}</Text>
      <Text style={{ fontSize: 30 }}>canGoPreviousStep: {`${canGoPreviousStep}`}</Text>
      <Text style={{ fontSize: 30 }}>canGoNextStep: {`${canGoNextStep}`}</Text>
      <Button title="next" onPress={() => goNextStep()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
