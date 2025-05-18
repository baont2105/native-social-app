import { useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";

export default function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segment = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    const isAuthScreen = segment[0] === "(auth)";

    if (!isSignedIn && !isAuthScreen) router.replace("/(auth)/login");
    else if (isSignedIn && isAuthScreen) router.replace("/(tabs)");
  }, [isLoaded, isSignedIn, segment, router]);

  if (!isLoaded) return null;
  return <Stack screenOptions={{ headerShown: false }} />;
}
