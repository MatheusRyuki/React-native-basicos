import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>O jogo acabou!</Text>
      <Text>Número de Rodadas: {props.turnos}</Text>
      <Text>O número foi: {props.numero}</Text>
      <Button title="Novo Jogo" onPress={props.restart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameOverScreen;
