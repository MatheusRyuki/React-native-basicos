import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  Dimensions
} from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import { Ionicons } from "@expo/vector-icons";
import BodyText from "../components/BodyText";

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

const renderList = (listLength, itemData) => (
  <View style={styles.listItem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <BodyText>{itemData.item}</BodyText>
  </View>
);

const GameScreen = props => {
  const tentativaInicial = gerarNumeroAleatorio(1, 100, props.escolha);

  const [numero, setNumero] = useState(tentativaInicial);

  const [tentativa, setTentativa] = useState([tentativaInicial]);
  const menor = useRef(1);
  const maior = useRef(100);

  const { escolha, onGameOver } = props;

  useEffect(() => {
    if (numero === props.escolha) {
      props.onGameOver(tentativa.length);
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
      menor.current = numero + 1;
    }
    const nextNumber = gerarNumeroAleatorio(
      menor.current,
      maior.current,
      numero
    );
    setNumero(nextNumber);
    setTentativa(curTentativa => [nextNumber, ...curTentativa]);
  };

  let listContainerStyle = styles.list;

  if (Dimensions.get("window").width < 350) {
    listContainerStyle = styles.bigList;
  }

  return (
    <View style={styles.screen}>
      <Text>Tentativa do Oponente</Text>
      <NumberContainer>{numero}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={() => nextGuessHandler("menos")}>
          <Ionicons name={"md-remove"} size={24} color="white" />
        </MainButton>
        <MainButton onPress={() => nextGuessHandler("mais")}>
          <Ionicons name={"md-add"} size={24} color="white" />
        </MainButton>
      </Card>
      <View style={listContainerStyle}>
        <FlatList
          keyExtractor={item => item.toString()}
          data={tentativa}
          renderItem={item => renderList(tentativa.length, item)}
          contentContainerStyle={styles.contentList}
        />
      </View>
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
    width: 400,
    maxWidth: "90%"
  },
  listItem: {
    borderColor: "#ccc",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%"
  },
  list: {
    width: "60%",
    flex: 1
  },
  bigList: {
    width: "80%",
    flex: 1
  },
  contentList: {
    flexGrow: 1,
    justifyContent: "flex-end"
  }
});

export default GameScreen;
