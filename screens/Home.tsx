import { View, TouchableOpacity, Image, StatusBar, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons } from "../constants";

const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <StatusBar backgroundColor={COLORS.white} />
      <View
        style={{
          // flex: 1,
          backgroundColor: COLORS.white,
          padding: 16,

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
          style={{
            height: 30,
            width: 30,
            borderRadius: 999,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.gray,
          }}
        >
          <Image
            source={icons.menu}
            resizeMode="contain"
            style={{
              height: 24,
              width: 24,
              tintColor: COLORS.black,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.gray,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Hi, from Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
