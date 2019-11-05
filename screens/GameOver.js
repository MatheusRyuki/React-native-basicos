import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/color";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>O jogo acabou!</TitleText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <View style={styles.resolveContainer}>
        <BodyText style={styles.test}>
          O seu celular precisou de
          <Text style={styles.highlight}> {props.turnos}</Text> rodadas para
          adivinhar o número{" "}
          <Text style={styles.highlight}>{props.numero}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.restart}>Novo Jogo</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  test: {
    textAlign: "center",
    fontSize: 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  },
  resolveContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
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
