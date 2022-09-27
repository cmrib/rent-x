import React from 'react';
import { useFonts, Inter_400Regular, Inter_500Medium, } from '@expo-google-fonts/inter';
import { Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold } from '@expo-google-fonts/archivo';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components'
import theme from './src/styles/theme';
import { Routes } from './src/routes'

export default function App() {
  SplashScreen.preventAutoHideAsync();

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  SplashScreen.hideAsync();

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

