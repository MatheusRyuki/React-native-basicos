import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameStartScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOver";

export default App = () => {
  const [state, setState] = useState();
  const [turn, setTurn] = useState(0);

  const startGameHandler = selectedNumber => {
    setState(selectedNumber);
    setTurn(0);
  };

  const restartHandler = () => {
    setTurn(0);
    setState(null);
  };

  const gameOverHandler = turnos => {
    setTurn(turnos);
  };

  let content = <GameStartScreen onStart={startGameHandler} />;

  if (state && turn <= 0) {
    content = <GameScreen escolha={state} onGameOver={gameOverHandler} />;
  } else if (turn > 0) {
    content = (
      <GameOverScreen turnos={turn} numero={state} restart={restartHandler} />
    );
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
