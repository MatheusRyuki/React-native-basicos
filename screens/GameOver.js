import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>O jogo acabou!</TitleText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>

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
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    width: 300,
    height: 300,
    overflow: "hidden",
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    marginVertical: 30
  }
});

export default GameOverScreen;
