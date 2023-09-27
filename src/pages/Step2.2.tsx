import { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StateMachineContext } from "../stateMachine/StateMachineProvider";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Step2StackParamList } from "../navigation/FlowNavigator/Step2/Step2Navigator";
import { useMutation } from "react-query";
import { postPassedStep2 } from "../queries";

export const Step22 = () => {
  const { value, send } = useContext(StateMachineContext);
  const navigation = useNavigation<NavigationProp<Step2StackParamList>>();

  const { mutate } = useMutation("postHasToPassStep2", postPassedStep2, {
    onSuccess: () => {
      send([
        {
          type: "STEP_2_CHANGE",
          hasToPassStep2: false,
        },
        "NEXT",
      ]);
    },
  });

  const onNextPress = () => {
    mutate();
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Step 2.2</Text>
      <Text>State machine state: {value}</Text>
      <Button title="next" onPress={onNextPress} />
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
