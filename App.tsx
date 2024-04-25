import React from "react";

import { Activity, Airplay } from "@tamagui/lucide-icons";
import { Button, Theme, View, XGroup, XStack, YStack, Text, Input } from "tamagui";
import { app } from "./firebase"; // Import Firebase app instance
import Login from "./screens/Login";



const App = () => {
  return (
    <View>
      <Login/>
    </View>
  );
};

export default App;
