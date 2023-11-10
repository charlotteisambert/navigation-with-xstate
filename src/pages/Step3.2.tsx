import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Step3StackParamList } from "../navigation/FlowNavigator/Step3/Step3Navigator";

export const Step32 = () => {
  const {goNextStep} = useNavigation<NavigationProp<Step3StackParamList>>();

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
