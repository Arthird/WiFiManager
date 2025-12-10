import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  useColorScheme,
  StatusBar
} from 'react-native';
import { PaperProvider, MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import WifiNetworksPage from '@/pages/wifi-networks-page';

function App() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const theme = isDarkMode ? MD3DarkTheme : MD3LightTheme;
  const barStyle = isDarkMode ? 'light-content' : 'dark-content';

  return (

    <PaperProvider theme={theme}>
      <StatusBar backgroundColor={theme.colors.background} barStyle={barStyle}/>
      <View style={[styles.container, { backgroundColor: theme.colors.background}]}>
        <ScrollView
          contentContainerStyle={[styles.contentContainer]}
          showsVerticalScrollIndicator={false}
        >
          <WifiNetworksPage theme={theme}/>
        </ScrollView>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 
  },
  contentContainer: {
    padding: 8,
    gap: 10,
    flexGrow: 1
  },
});

export default App;
