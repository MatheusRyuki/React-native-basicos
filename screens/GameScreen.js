import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
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

  const [turnos, setTurnos] = useState(0);
  const menor = useRef(1);
  const maior = useRef(100);

  const { escolha, onGameOver } = props;

  useEffect(() => {
    if (numero === props.escolha) {
      props.onGameOver(turnos);
    }
  }, [numero, escolha, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === "menos" && numero < props.escolha) ||
      (direction === "mais" && numero > props.escolha)
    ) {
      Alert.alert("Não minta!", "Você sabia que isso estava errado...", [
        { text: "Desculpa!", style: "cancel" }
      ]);
      return;
    }
    if (direction === "menos") {
      maior.current = numero;
    } else {
      menor.current = numero;
    }
    const nextNumber = gerarNumeroAleatorio(
      menor.current,
      maior.current,
      numero
    );
    setNumero(nextNumber);
    setTurnos(turnos => turnos + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Tentativa do Oponente</Text>
      <NumberContainer>{numero}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="Menos" onPress={() => nextGuessHandler("menos")} />
        <Button title="Mais" onPress={() => nextGuessHandler("mais")} />
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
