import React from 'react'

import AppLoading from 'expo-app-loading'
import {useFonts} from 'expo-font'
import {
  Inter_500Medium,
  Inter_400Regular
} from '@expo-google-fonts/inter'

import {
  Rajdhani_700Bold,
  Rajdhani_500Medium
} from '@expo-google-fonts/rajdhani'

import {SingIn} from './src/screens/SingIn'
import { StatusBar , LogBox} from 'react-native'
import { Routes } from './src/routes'
import { Background } from "./src/components/Background";
import {AuthProvider} from './src/hooks/auth'



export default function App(){
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <Background>

      <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="light-content"
        />

        <AuthProvider>
          <Routes />
        </AuthProvider>
    </Background>
  )
}