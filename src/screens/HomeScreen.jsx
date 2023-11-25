import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("Tarefa");
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="red" />
      <View>
        <Text>HomeScreen</Text>

        <Pressable style={styles.botao} onPress={handleClick}>
          <Text>Ir para TarefaScreen</Text>
        </Pressable>

        <Image source={require("../../assets/img/logo.jpeg")} />

        <View style={styles.viewImagem}>
          <Image
            style={styles.imagem}
            source={require("../../assets/img/call.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  viewImagem: {
    alignItems: "center",
  },
  imagem: {
    width: 300,
    height: 300,
    resizeMode: "cover",
  },
});

export default HomeScreen;
