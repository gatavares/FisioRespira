import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Layout, Text, Icon } from '@ui-kitten/components';


import {useNavigation } from '@react-navigation/native'

const AccEx = 0

const exerciciosRenderContent0 = () => {
  const navigation = useNavigation()

  return (
    <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }} >
      <Text category='s1' style={{fontSize: 20, marginTop: 25, marginBottom: 15, marginLeft: 10, marginRight: 10,}}>INFELIZMENTE NÃO CONSEGUIMOS ATRIBUIR NEUNHUM EXERCICIO!</Text>
      <Text category='p1' style={{marginLeft: 20, marginRight: 20, fontSize: 15,}}>Para lhe podermos atribuir exercicios tem de adirir ao nosso plano de <Text category='p1' style={{fontWeight: 'bold', textDecorationLine: 'underline', fontSize: 15,}}>acompanhamento personalizado</Text>!</Text>
      <TouchableOpacity style={{ flexDirection: 'row', marginTop: '50%', marginLeft: '2%', marginRight: '3%' }} onPress={() => {
        navigation.navigate('LandingPage')
      }}>
        <Icon style={styles.icon} fill='#0074cc' name='heart-outline' />
        <Text category='s1' style={{marginLeft: 15, color: '#0074cc'}}>ADERIR AQUI AO PLANO DE{'\n'}ACOMPANHAMENTO PERSONALIZADO</Text>
      </TouchableOpacity>
    </Layout >
  )
}

const exerciciosRenderContent1 = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <ScrollView style={styles.scrollView}>
        <Text category='s1' style={{ fontSize: 22, }}>EXERCICIOS</Text>
        <Text category='p2' style={styles.text}>
          {'\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text category='s1' style={styles.title}>UTILIDADES</Text>
        <Text category='p2' style={styles.text}>
          {'\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text category='s1' style={styles.title}>VANTAGENS</Text>
        <Text category='p2' style={styles.text}>
          {'\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text category='s1' style={styles.title}>PARA QUEM É RECOMENDADO E DIRECIONADO?</Text>
        <Text category='p2' style={styles.text}>
          {'\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </Layout>
  )
}
const ExerciciosPageRender = () => {
  if (AccEx == 0) {
    return (
      exerciciosRenderContent0()
    )
  }
  else {
    return (
      exerciciosRenderContent1()    
    )
  }
}

export default ExerciciosPageRender

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
  icon: {
    width: 30,
    height: 30,
  },
})