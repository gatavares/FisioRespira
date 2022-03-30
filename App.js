import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './screens/LandingPage';
import LoginPage from './screens/LoginPage';
import RegistoPage from './screens/RegistoPage';
import HomeScreen from './screens/HomeScreen';
//import CacheStorage from './components/CacheStorage';



const Stack = createNativeStackNavigator();

export default function App() {
  // <CacheStorage />
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <StatusBar style="auto" />

        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="Registar" component={RegistoPage} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
