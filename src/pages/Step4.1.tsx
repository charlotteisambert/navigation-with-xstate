import { StyleSheet, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Step4StackParamList } from "../navigation/FlowNavigator/Step4/Step4Navigator";
import { useFlow } from "../navigation/FlowNavigator/createFlowNavigator";

export const Step41 = () => {
  const { canGoNextStep, progress } = useFlow();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Step 4.1</Text>
      <Text style={{ fontSize: 30 }}>progress: {progress}</Text>
      <Text style={{ fontSize: 30 }}>canGoNextStep: {`${canGoNextStep}`}</Text>
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
