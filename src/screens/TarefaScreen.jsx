import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TarefaScreen = () => {
    const navigation = useNavigation();
    console.log(navigation);

    const handleBackClick = () => {
        navigation.goBack();
    }

    const handleProfileClick = () => {
        navigation.navigate("Profile");
    }

  return (
    <View>
      <Text>TarefaScreen</Text>

      <Button 
        title="Voltar para HomeScreen"
        onPress={handleBackClick}
      />

      <Button
        title="Ir para ProfileScreen"
        onPress={handleProfileClick}
        />

    </View>
  );
};

export default TarefaScreen;