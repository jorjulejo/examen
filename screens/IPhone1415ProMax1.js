import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Color, FontSize, Border, Padding } from "../GlobalStyles";
import Atomo from "../components/Atomo";

const IPhone1415ProMax1 = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [input, setInput] = useState("");

  const buttonData = [
    { text: "1", image: require("../assets/ellipse-11.png") },
    { text: "2", image: require("../assets/ellipse-12.png") },
    { text: "3", image: require("../assets/ellipse-15.png") },
    { text: "4", image: require("../assets/ellipse-14.png") },
    { text: "5", image: require("../assets/ellipse-13.png") },
    { text: "6", image: require("../assets/ellipse-115.png") },
    { text: "7", image: require("../assets/ellipse-114.png") },
    { text: "8", image: require("../assets/ellipse-113.png") },
    { text: "9", image: require("../assets/ellipse-18.png") },
    { text: "=", image: require("../assets/ellipse-112.png") },
    { text: "0", image: require("../assets/ellipse-111.png") },
    { text: "C", image: require("../assets/ellipse-110.png") },
    { text: "*", image: require("../assets/ellipse-19.png") },
    { text: "-", image: require("../assets/ellipse-16.png") },
    { text: "+", image: require("../assets/ellipse-17.png") },
    { text: "/", image: require("../assets/ellipse-116.png") },
  ];

  const handleItemClick = (value) => {
    if (value === "=") {
      calculate();
    } else if (value === "C") {
      clear();
    } else {
      setSelectedValues((prevValues) => [...prevValues, value]);
      setInput((prevInput) => prevInput + value);
    }
  };

  const clear = () => {
    setSelectedValues([]);
    setInput("");
  };

  const calculate = () => {
    try {
      const result = eval(input);
      clear();
      setSelectedValues([result.toString()]);
      setInput(result.toString());
    } catch (error) {
      // Manejar errores de la evaluación de la expresión
      console.error("Error al calcular:", error);
      clear();
    }
  };

  return (
    <View style={styles.iphone1415ProMax1}>
      <View style={styles.atomo}>
        <Atomo  selectedValues={selectedValues} />
      </View>

      <View style={styles.buttonContainer}>
        {buttonData.map((button, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleItemClick(button.text)}
            style={styles.button}
          >
            <Image
              style={styles.buttonImage}
              resizeMode="cover"
              source={button.image}
            />
            <Text style={styles.textPosition}>{button.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 34,
  },
  button: {
    backgroundColor: Color.colorGray_100,
    width: "30%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: "1%",
    position: "relative",
  },
  textPosition: {
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_17xl,
    position: "absolute",
  },
  atomoChild: {
    height: "100%",
    backgroundColor: Color.pantalla,
    borderRadius: Border.br_xl,
  },
  atomo: {
    flex: 1,

  },
  buttonImage: {
    width: "70%",
    height: "70%",
    resizeMode: "cover",
  },
  iphone1415ProMax1: {
    backgroundColor: Color.movil,
    flex: 1,
  },
});

export default IPhone1415ProMax1;
