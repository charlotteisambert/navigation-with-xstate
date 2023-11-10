import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Step11() {

  const { goNextStep } = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput style={{ backgroundColor: "#DDDDDD", width: "70%" }} />
      <Text style={{ fontSize: 30 }}>Step 1.1</Text>
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
