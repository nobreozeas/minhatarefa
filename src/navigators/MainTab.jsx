import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStack from "./MainStack";
import ConfigScreen from "../screens/ConfigScreen";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
    }}>
      <Tab.Screen
        name="HomeTab"
        component={MainStack}
        options={{
          title: "Home",
          tabBarIcon: () => (
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../assets/img/home-icon.png")}
            />
          ),
          
          tabBarLabelStyle: {
            fontSize: 20,
          }
        }}
      />
      <Tab.Screen 
        name="Config"
        component={ConfigScreen}


      />
    </Tab.Navigator>
  );
};

export default MainTab;
