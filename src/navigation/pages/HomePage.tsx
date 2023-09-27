import React from "react";
import { Home } from "../../pages/Home";
import { Navigation, RootStackParamList } from "../RootNavigator";

interface HomeProps {
  navigation: Navigation<RootStackParamList, "Home">;
}

export const HomePage = ({ navigation }: HomeProps) => {
  const goToFlow = () => navigation.navigate("Flow");

  return <Home goToFlow={goToFlow} />;
};
