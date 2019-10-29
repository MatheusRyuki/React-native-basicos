import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

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
};

const styles = StyleSheet.create({});

export default GameScreen;
