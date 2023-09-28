import { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StateMachineContext } from "../stateMachine/StateMachineProvider";
import { FlowStackParamList } from "../navigation/FlowNavigator/FlowNavigator";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Step4StackParamList } from "../navigation/FlowNavigator/Step4/Step4Navigator";

export const Step41 = () => {
  const { value, send } = useContext(StateMachineContext);
  const navigation = useNavigation<NavigationProp<Step4StackParamList>>();

  const goBack = () => {
    send("BACK");
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize:30}}>Step 4.1</Text>
      <Text style={{ fontSize:30}}>State machine state: {value}</Text>
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
