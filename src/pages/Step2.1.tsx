import { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StateMachineContext } from "../stateMachine/StateMachineProvider";
import { FlowStackParamList } from "../navigation/FlowNavigator/FlowNavigator";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Step1StackParamList } from "../navigation/FlowNavigator/Step1Navigator/Step1Navigator";
import { Step2StackParamList } from "../navigation/FlowNavigator/Step2/Step2Navigator";

export const Step21 = () => {
  const { value, send} = useContext(StateMachineContext);
  const navigation = useNavigation<NavigationProp<Step2StackParamList>>();

  const goToNext = () => {
    navigation.navigate("Step22");
  };

  const goBack = () => {
    send("BACK")
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize:30}}>Step 2.1</Text>
      <Text style={{ fontSize:30}}>State machine state: {value}</Text>
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
