import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import { Layout, Text } from '@ui-kitten/components';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavBar from '../components/BottomNavBar';
import TopNavBar from "../components/TopNavBar"

import ExerciciosPage from './TabScreens/ExerciciosPage';
import FisioPage from './TabScreens/FisioPage';
import AccPage from './TabScreens/AccPage';
import AboutUsPage from './TabScreens/AboutUsPage';

const Tab = createBottomTabNavigator();

const HomeScreenRender = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView>
        <View style={{ margin: '7%', }}>
          <Text category='s1' style={{ fontSize: 22, }}>O QUE É FISIOTERAPIA RESPIRATÓRIA?</Text>
          <Text category='p2' style={styles.text}>
            {'\n'}{'\t'}O Programa de Reabilitação Respiratória é um tratamento médico multidimensional implementado por uma equipa multiprofissional
            e multidisciplinar para pacientes com doenças respiratórias crônicas sintomáticas. {'\n'}{'\n'}Inclui estratégias abrangentes e
            individualizadas para cada paciente com o objetivo de reduzir a dispneia (falta de ar) e melhorar a respiração,
            aumentar a tolerância ao esforço, o engajamento social e a qualidade de vida, além de reduzir os custos de saúde.
            E reduzir uma série de fatores que contribuem para a evolução natural da doença.
          </Text>


          <Text category='s1' style={styles.title}>UTILIDADES E VANTAGENS</Text>
          <Text category='s1' style={{ fontSize: 18, marginTop: 8, textDecorationLine: 'underline' }}>NAS DOENÇAS CRONICAS:</Text>
          <Text category='p2' style={styles.text}>
            {'\n'}{'\t'}A fisioterapia atua na fase aguda de uma doença, seja na unidade de terapia intensiva, pacientes hospitalizados ou em casa para:{'\n'}
            <Text style={{ fontWeight: 'bold', }}>
              {'\n'}- Aliviar os sintomas, como dificuldade para respirar{'\n'}
              {'\n'}- Melhorar o efeito da tosse{'\n'}
              {'\n'}- Aumentar os níveis de ventilação e oxigénio{'\n'}
              {'\n'}- Aumento da mobilidade e expansão pulmonar{'\n'}
              {'\n'}- Prevenção de deformidades posturais associadas a doenças respiratórias{'\n'}
              {'\n'}- Desobstruir as vias aéreas e evitar o acúmulo de secreções{'\n'}
            </Text>
          </Text>
          <Text category='s1' style={{ fontSize: 18, marginTop: 8, textDecorationLine: 'underline' }}>NA FASE ESTÁVEL:</Text>
          <Text category='p2' style={styles.text}>
            {'\n'}{'\t'}Atua com o objetivo de:{'\n'}
            <Text style={{ fontWeight: 'bold', }}>
              {'\n'}- Prevenir deterioração e hospitalização futura{'\n'}
              {'\n'}- Maior tolerância ao esforço{'\n'}
              {'\n'}- Estratégias de ensino para controlo da dispneia{'\n'}
              {'\n'}- Ensinar sobre fatores de risco{'\n'}
              {'\n'}- Ganhar confiança e autonomia no dia a dia{'\n'}
              {'\n'}- Prevenir o isolamento e a depressão devido às limitações da doença{'\n'}
              {'\n'}- Aumentar a esperança e a qualidade de vida de cada usuário{'\n'}
            </Text>
          </Text>


          <Text category='s1' style={styles.title}>PARA QUEM É RECOMENDADO E DIRECIONADO?</Text>
          <Text category='p2' style={styles.text}>
            {'\n'}{'\t'}A fisioterapia respiratória pode ser realizada em adultos e na idade pediátrica, como bebes ou crianças.
            {'\n'}{'\n'}A fisioterapia respiratória pode ser utilizada em pacientes com doença pulmonar obstrutiva crónica, bronquiectasias,
            fibrose cística, bronquelite, no pré e pós-operatório de cirurgia cardiotorácica e abdominal alta, entre outras condições.
          </Text>
        </View>
      </ScrollView>
    </Layout>
  )
}


const HomeScreen = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNavBar {...props} />}
    >
      <Tab.Screen name="Inicio" component={HomeScreenRender}
        options={{
          header: () => <TopNavBar titulo="Inicio" />
        }} />
      <Tab.Screen name="Sobre Nós" component={AboutUsPage}
        options={{
          header: () => <TopNavBar titulo="Sobre Nós" />
        }}
      />
      <Tab.Screen name="Exercicios" component={ExerciciosPage}
        initialParams={{ UID: "ptr58S57QoVH0gVfZT5Wkyj3d1i1" }}  //by pass login Admin
        //initialParams={{ UID: "PSVrWaMoxuhIkoPLI4hR5Nyfa9s1"}}  //by pass login GuiAcc
        //initialParams={{ UID: route.params.UID }}
        options={{
          header: () => <TopNavBar titulo="Exercicios" />
        }}
      />
      <Tab.Screen name="Saber Mais" component={FisioPage}
        options={{
          header: () => <TopNavBar titulo="Saber Mais" />
        }}
      />
      <Tab.Screen name="Conta" component={AccPage}
        initialParams={{ UID: "ptr58S57QoVH0gVfZT5Wkyj3d1i1" }}  //by pass login Admin
        //initialParams={{ UID: "PSVrWaMoxuhIkoPLI4hR5Nyfa9s1"}}  //by pass login GuiAcc
        //initialParams={{ UID: route.params.UID }}
        options={{
          header: () => <TopNavBar titulo="Conta" />

        }}
      />
    </Tab.Navigator>
  )
};

export default HomeScreen

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  scrollView: {
    margin: '7%',
  },
  title: {
    marginTop: 50,
    fontSize: 22,
  },
  text: {
    fontSize: 17,
  },
})