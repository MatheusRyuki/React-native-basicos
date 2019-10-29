import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const gerarNumeroAleatorio = (min, max, excluir) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const numero = Math.floor(Math.random() * (max - min)) + min;
  if (numero === excluir) {
    return gerarNumeroAleatorio(min, max, excluir);
  } else {
    return numero;
  }
};

const GameScreen = props => {
  const [numero, setNumero] = useState(
    gerarNumeroAleatorio(1, 100, props.escolha)
  );

  return (
    <View style={styles.screen}>
      <Text>Tentativa do Oponente</Text>
      <NumberContainer>{numero}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="Menos" onPress={() => {}} />
        <Button title="Mais" onPress={() => {}} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%"
  }
});

export default GameScreen;
