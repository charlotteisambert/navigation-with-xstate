import { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

interface HomeProps {
  goToFlow: () => void;
}

export const Home: FC<HomeProps> = ({ goToFlow }) => (
  <View style={styles.container}>
    <Text>Home</Text>
    <Button onPress={goToFlow} title="Start flow" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
