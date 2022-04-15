import { StatusBar } from 'expo-status-bar';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './screens/LandingPage';
import LoginPage from './screens/LoginPage';
import RegistoPage from './screens/RegistoPage';
import HomeScreen from './screens/HomeScreen';
import TermosPage from './screens/TermosPage';
import Testes from './screens/Test/Testes';
import Card from './components/CardExResp';
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
          <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false, }}/>
            <Stack.Screen name="Registar" component={RegistoPage} options={{ headerShown: false, }}/>
            <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false, }}/>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, }}/>
            <Stack.Screen name="Termos" component={TermosPage} options={{ headerShown: false, }}/>
            <Stack.Screen name="Testes" component={Testes} options={{ headerShown: false, }}/>
            <Stack.Screen name="Card" component={Card} options={{ headerShown: false, }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}