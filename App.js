import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameStartScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default App = () => {
  const [state, setState] = useState();

  const startGameHandler = selectedNumber => {
    setState(selectedNumber);
  };

  let content = <GameStartScreen onStart={startGameHandler} />;

  if (state) {
    content = <GameScreen escolha={state} />;
  }

  return (
    <View style={styles.container}>
      <Header title="Adivinhe o Número" />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
