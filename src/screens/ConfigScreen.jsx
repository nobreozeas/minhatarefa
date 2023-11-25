import React from "react";
import { View, Text, StyleSheet, StatusBar, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const ConfigScreen = () => {
    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <StatusBar backgroundColor="red" />
            <View>
                <Text>Configurações</Text>
            </View>
        </SafeAreaView>
    );
    
};

export default ConfigScreen;