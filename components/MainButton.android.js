import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import Colors from "../constants/color";

const MainButton = props => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableNativeFeedback onPress={props.onPress} activeOpacity={0.6}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden"
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18
  }
});

export default MainButton;
