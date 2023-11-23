import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, Border } from "../GlobalStyles";

const Atomo = ({ selectedValues }) => {
  return (
    <View style={styles.atomo}>
      {selectedValues.map((value, index) => (
        <View key={index} style={styles.property1headLayout}>
          <View style={styles.property1headProperty2caChild} />
          <Text style={[styles.text, styles.textTypo]}>{value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  atomo: {
    borderRadius: 5,
    borderStyle: "dashed",
    borderColor: "#9747ff",
    borderWidth: 1,
    width: 448,
    height: 555,
    overflow: "hidden",
  },
  property1headLayout: {
    flex: 1,
  },
  textTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_17xl,
    position: "absolute",
  },
  text: {
    //left: "91.18%",
    // You can add more styles specific to the text if needed
  },
  property1headProperty2caChild: {
    // You can add styles for this child view if needed
  },
});

export default Atomo;
