import { Stack } from "expo-router";
import { setBackgroundColorAsync } from "expo-system-ui";
import { useEffect } from "react";
import { StatusBar, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  // Set màu cho toàn hệ thống (Android nav bar)
  useEffect(() => {
    setBackgroundColorAsync("#000");
  }, []);

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: "#000" }}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}
