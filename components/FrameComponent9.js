import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FrameComponent9 = () => {
  return (
    <View style={styles.vectorParent}>
      <Image
        style={styles.componentChild}
        contentFit="cover"
        source={require("../assets/ellipse-1@3x.png")}
      />
      <Text style={styles.text}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  componentChild: {
    alignSelf: "stretch",
    flex: 1,
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    zIndex: 0,
    overflow: "hidden",
  },
  text: {
    position: "absolute",
    marginTop: -22.5,
    marginLeft: -13.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_17xl,
    color: Color.colorBlack,
    textAlign: "center",
    zIndex: 1,
  },
  vectorParent: {
    backgroundColor: Color.colorGray_100,
    width: 101,
    height: 101,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default FrameComponent9;
