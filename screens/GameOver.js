import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView
} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/color";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>O jogo acabou!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/success.png")}
          />
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  test: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  },
  resolveContainer: {
    marginHorizontal: Dimensions.get("window").height / 60,
    marginVertical: 15
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    overflow: "hidden",
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    marginVertical: Dimensions.get("window").height / 40
  }
});

export default GameOverScreen;
