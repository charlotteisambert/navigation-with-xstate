import { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StateMachineContext } from "../stateMachine/StateMachineProvider";
import { FlowStackParamList } from "../navigation/FlowNavigator/FlowNavigator";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export const Step22 = () => {
  const { value, send } = useContext(StateMachineContext);
  const navigation = useNavigation<NavigationProp<FlowStackParamList>>();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Step 2.</Text>
      <Text>State machine state: {value}</Text>
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
