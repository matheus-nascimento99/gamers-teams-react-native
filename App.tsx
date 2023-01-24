import React from "react";
import { ActivityIndicator } from 'react-native'
import { Groups } from "@screens/Groups";
import theme from "./src/theme";
import { ThemeProvider } from 'styled-components'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  });

  

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Groups /> : <ActivityIndicator />}
      <Groups />
    </ThemeProvider>
  );
}