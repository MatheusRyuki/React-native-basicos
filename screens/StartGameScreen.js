import React, { useState } from "react";
import Card from "../components/Card";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Colors from "../constants/color";
import Input from "../components/Input";

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
    confirmedOutput = <Text>Número Escolhido: {numero}</Text>;
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
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Iniciar um novo jogo!</Text>
        <Card style={styles.inputContainer}>
          <Text>Selecione um Número!</Text>
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
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  button: {
    width: 100
  },
  input: {
    width: 50,
    textAlign: "center"
  }
});

export default StartGameScreen;
