import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import Colors from "../constants/color";
import TitleText from "../components/TitleText";

const Header = props => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIos,
          android: styles.headerAndroid
        })
      }}
    >
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: Platform.OS === "ios" ? Colors.primary : "white"
  },
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center"
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
    borderBottomColor: "white",
    borderBottomWidth: 0
  },
  headerIos: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
});
export default Header;
