import { useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { StateMachineContext } from "../stateMachine/StateMachineProvider";
import { FlowStackParamList } from "../navigation/FlowNavigator/FlowNavigator";
import { useNavigation } from "@react-navigation/native";

export default function Step11() {
  const { value, send } = useContext(StateMachineContext);

  const { dispatch } = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput style={{ backgroundColor: "#DDDDDD", width: "70%" }} />
      <Text style={{ fontSize: 30 }}>Step 1.1</Text>
      <Text style={{ fontSize: 30 }}>State machine state: {value}</Text>
      <Button title="next" onPress={() => dispatch({ type: "NEXT" })} />
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
