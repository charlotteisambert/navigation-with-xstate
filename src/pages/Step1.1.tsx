import { useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { StateMachineContext } from "../stateMachine/StateMachineProvider";
import { FlowStackParamList } from "../navigation/FlowNavigator/FlowNavigator";

export default function Step11() {
  const { value, send } = useContext(StateMachineContext);

  return (
    <View style={styles.container}>
      <TextInput style={{ backgroundColor: "#DDDDDD", width: '70%' }} />
      <Text>Step 1.1</Text>
      <Text>State machine state: {value}</Text>
      <Button title="next" onPress={() => send("NEXT")} />
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
