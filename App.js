import { StatusBar } from 'expo-status-bar';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './screens/Login/LandingPage';
import LoginPage from './screens//Login/LoginPage';
import RegistoPage from './screens//Login/RegistoPage';
import HomeScreen from './screens/HomeScreen';
import TermosPage from './screens/Pages/TermosPage';
import Exercicios from './screens/Exercicios/Exercicios';
import Card from './components/CardExResp';
import InfoPessoal from './screens/Conta/InfoPessoal';


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
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, gestureEnabled: false,}}/>
            <Stack.Screen name="Termos" component={TermosPage} options={{ title: 'Termos e Condições da FisioRespira', headerBackTitle:'Voltar'}}/>
            <Stack.Screen name="Exercicios" component={Exercicios} options={{title: {}}}/>
            <Stack.Screen name="Card" component={Card} options={{ headerShown: false,}}/>
            <Stack.Screen name="Infos" component={InfoPessoal} options={{headerBackTitle:'Voltar'}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}