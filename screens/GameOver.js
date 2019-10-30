import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>O jogo acabou!</TitleText>
      <Image source={require("../assets/success.png")} />
      <BodyText>Número de Rodadas: {props.turnos}</BodyText>
      <BodyText>O número foi: {props.numero}</BodyText>
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
