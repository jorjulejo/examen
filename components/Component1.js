import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Component1 = () => {
  return (
    <View style={styles.component1}>
      <View style={[styles.vectorParent, styles.vectorParentFlexBox]}>
        <Image
          style={styles.instanceChild}
          contentFit="cover"
          source={require("../assets/ellipse-1@3x.png")}
        />
        <Text style={[styles.text, styles.textPosition]}>1</Text>
      </View>
      <View style={[styles.vectorGroup, styles.vectorParentPosition5]}>
        <Image
          style={styles.instanceChild}
          contentFit="cover"
          source={require("../assets/ellipse-1@3x.png")}
        />
        <Text style={[styles.text1, styles.textPosition]}>2</Text>
      </View>
      <View style={[styles.vectorContainer, styles.vectorParentPosition4]}>
        <Image
          style={styles.instanceChild}
          contentFit="cover"
          source={require("../assets/ellipse-1@3x.png")}
        />
        <Text style={[styles.text1, styles.textPosition]}>5</Text>
      </View>
      <View style={[styles.frameView, styles.vectorParentPosition4]}>
        <Image
          style={styles.instanceChild}
          contentFit="cover"
          source={require("../assets/ellipse-1@3x.png")}
        />
        <Text style={[styles.text3, styles.textPosition]}>4</Text>
      </View>
      <View style={[styles.vectorParent1, styles.vectorParentPosition3]}>
        <Image
          style={styles.instanceChild}
          contentFit="cover"
          source={require("../assets/ellipse-1@3x.png")}
        />
        <Text style={[styles.text1, styles.textPosition]}>3</Text>
      </View>
      <View style={[styles.vectorParent2, styles.vectorParentPosition2]}>
        <Image
          style={styles.instanceChild}
          contentFit="cover"
          source={require("../assets/ellipse-1@3x.png")}
        />
        <Text style={[styles.text, styles.textPosition]}>-</Text>
      </View>
      <View style={[styles.vectorParent3, styles.vectorParentPosition2]}>
        <Image
          style={styles.instanceChild}
          contentFit="cover"
          source={require("../assets/ellipse-1@3x.png")}
        />
        <Text style={[styles.text3, styles.textPosition]}>+</Text>
      </View>
      <View style={[styles.vectorParent4, styles.vectorParentPosition1]}>
        <Image
          style={styles.instanceChild}
          contentFit="cover"
          source={require("../assets/ellipse-1@3x.png")}
        />
        <Text style={[styles.text1, styles.textPosition]}>9</Text>
      </View>
      <View style={[styles.vectorParent5, styles.vectorParentPosition]}>
        <Image
          style={styles.instanceChild}
          contentFit="cover"
          source={require("../assets/ellipse-1@3x.png")}
        />
        <Text style={[styles.text8, styles.textPosition]}>*</Text>
      </View>
      <View style={[styles.vectorParent6, styles.vectorParentPosition]}>
        <Image
          style={styles.instanceChild}
          contentFit="cover"
          source={require("../assets/ellipse-1@3x.png")}
        />
        <Text style={[styles.c, styles.textPosition]}>C</Text>
      </View>
      <View style={[styles.vectorParent7, styles.vectorParentPosition]}>
        <Image
          style={styles.instanceChild}
          contentFit="cover"
          source={require("../assets/ellipse-1@3x.png")}
        />
        <Text style={[styles.text1, styles.textPosition]}>0</Text>
      </View>
      <View style={[styles.vectorParent8, styles.vectorParentPosition]}>
        <Image
          style={styles.instanceChild}
          contentFit="cover"
          source={require("../assets/ellipse-1@3x.png")}
        />
        <Text style={[styles.text3, styles.textPosition]}>=</Text>
      </View>
      <View style={[styles.vectorParent9, styles.vectorParentPosition1]}>
        <Image
          style={styles.instanceChild}
          contentFit="cover"
          source={require("../assets/ellipse-1@3x.png")}
        />
        <Text style={[styles.text1, styles.textPosition]}>8</Text>
      </View>
      <View style={[styles.vectorParent10, styles.vectorParentPosition1]}>
        <Image
          style={styles.instanceChild}
          contentFit="cover"
          source={require("../assets/ellipse-1@3x.png")}
        />
        <Text style={[styles.text12, styles.textPosition]}>7</Text>
      </View>
      <View style={[styles.vectorParent11, styles.vectorParentPosition3]}>
        <Image
          style={styles.instanceChild}
          contentFit="cover"
          source={require("../assets/ellipse-1@3x.png")}
        />
        <Text style={[styles.text1, styles.textPosition]}>6</Text>
      </View>
      <View style={[styles.vectorParent12, styles.vectorParentPosition1]}>
        <Image
          style={styles.instanceChild}
          contentFit="cover"
          source={require("../assets/ellipse-1@3x.png")}
        />
        <Text style={[styles.text14, styles.textPosition]}>/</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorGray_100,
    bottom: "77.35%",
    top: "0%",
    width: "21.63%",
    height: "22.65%",
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    zIndex: 1,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_17xl,
    left: "50%",
    top: "50%",
    marginTop: -22.5,
    position: "absolute",
  },
  vectorParentPosition5: {
    left: "26.12%",
    right: "52.25%",
  },
  vectorParentPosition4: {
    bottom: "51.57%",
    top: "25.78%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
    width: "21.63%",
    height: "22.65%",
    position: "absolute",
  },
  vectorParentPosition3: {
    left: "52.25%",
    right: "26.12%",
  },
  vectorParentPosition2: {
    left: "78.37%",
    right: "0%",
  },
  vectorParentPosition1: {
    bottom: "25.78%",
    top: "51.57%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
    width: "21.63%",
    height: "22.65%",
    position: "absolute",
  },
  vectorParentPosition: {
    bottom: "0%",
    top: "77.35%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
    width: "21.63%",
    height: "22.65%",
    position: "absolute",
  },
  instanceChild: {
    alignSelf: "stretch",
    flex: 1,
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    zIndex: 0,
    overflow: "hidden",
  },
  text: {
    marginLeft: -9.5,
  },
  vectorParent: {
    left: "0%",
    right: "78.37%",
  },
  text1: {
    marginLeft: -12.5,
  },
  vectorGroup: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorGray_100,
    bottom: "77.35%",
    top: "0%",
    width: "21.63%",
    height: "22.65%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorContainer: {
    left: "26.12%",
    right: "52.25%",
  },
  text3: {
    marginLeft: -13.5,
  },
  frameView: {
    left: "0%",
    right: "78.37%",
  },
  vectorParent1: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorGray_100,
    bottom: "77.35%",
    top: "0%",
    width: "21.63%",
    height: "22.65%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent2: {
    bottom: "51.57%",
    top: "25.78%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
    width: "21.63%",
    height: "22.65%",
    position: "absolute",
  },
  vectorParent3: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorGray_100,
    bottom: "77.35%",
    top: "0%",
    width: "21.63%",
    height: "22.65%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent4: {
    left: "52.25%",
    right: "26.12%",
  },
  text8: {
    marginLeft: -10.5,
  },
  vectorParent5: {
    left: "78.37%",
    right: "0%",
  },
  c: {
    marginLeft: -14.5,
  },
  vectorParent6: {
    left: "52.25%",
    right: "26.12%",
  },
  vectorParent7: {
    left: "26.12%",
    right: "52.25%",
  },
  vectorParent8: {
    left: "0%",
    right: "78.37%",
  },
  vectorParent9: {
    left: "26.12%",
    right: "52.25%",
  },
  text12: {
    marginLeft: -11.5,
  },
  vectorParent10: {
    left: "0%",
    right: "78.37%",
  },
  vectorParent11: {
    bottom: "51.57%",
    top: "25.78%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.colorGray_100,
    width: "21.63%",
    height: "22.65%",
    position: "absolute",
  },
  text14: {
    marginLeft: -7.5,
  },
  vectorParent12: {
    left: "78.37%",
    right: "0%",
  },
  component1: {
    width: 467,
    height: 446,
  },
});

export default Component1;
