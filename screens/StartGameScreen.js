import React, { useState } from "react";
import Card from "../components/Card";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions
} from "react-native";
import Colors from "../constants/color";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";

const StartGameScreen = props => {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [numero, setNumero] = useState();

  const inputHandler = text => {
    setValue(text.replace(/[^0-9]/g, ""));
  };

  const resetHandler = () => {
    setValue("");
    setConfirmed(false);
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.numeroEscolhido}>
        <TitleText>Você escolheu</TitleText>
        <NumberContainer>{numero}</NumberContainer>
        <MainButton onPress={() => props.onStart(numero)}>
          COMEÇAR O JOGO
        </MainButton>
      </Card>
    );
  }

  const confirmHandler = () => {
    const numeroEscolhido = parseInt(value);
    if (
      isNaN(numeroEscolhido) ||
      numeroEscolhido <= 0 ||
      numeroEscolhido > 99
    ) {
      Alert.alert("Valor Inválido", "O número tem que ser entre 1 e 99", [
        { text: "Ok", style: "destructive", onPress: resetHandler }
      ]);
      return;
    }

    setConfirmed(true);
    setNumero(parseInt(value));
    setValue("");
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TitleText style={styles.title}>Iniciar um novo jogo!</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText>Selecione um Número!</BodyText>
          <Input
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={value}
            style={styles.input}
            onChangeText={inputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={Colors.accent}
                onPress={resetHandler}
              />
            </View>
            <View tyle={styles.button}>
              <Button
                title="Confirmar"
                onPress={confirmHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: Dimensions.get("window").height > 600 ? 20 : 5,
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  inputContainer: {
    width: "80%",
    minWidth: 300,
    maxWidth: "95%",
    alignItems: "center"
  },
  title: {
    marginVertical: 10
  },
  button: {
    width: Dimensions.get("window").width / 4
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  numeroEscolhido: {
    marginTop: 20,
    alignItems: "center"
  }
});

export default StartGameScreen;
