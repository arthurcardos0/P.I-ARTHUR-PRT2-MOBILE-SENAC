import {ScrollView,View, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { useFonts, Nunito_700Bold, Nunito_900Black_Italic, Nunito_700Bold_Italic, Nunito_800ExtraBold, Nunito_600SemiBold } from '@expo-google-fonts/nunito';

import Body from './Componentes/Body';

export default function App() {
  const [fonteCarregada] = useFonts ({
    "opcaoum": Nunito_700Bold,
    "opcaodois": Nunito_900Black_Italic,
    "opcaotres": Nunito_700Bold_Italic,
    "opcaoquatro": Nunito_800ExtraBold,
    "opcaocinco": Nunito_600SemiBold,
  });

  if (!fonteCarregada) {
    return <View />;
  };
  
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Body/>
      </ScrollView>
    </SafeAreaView>
  );
};
