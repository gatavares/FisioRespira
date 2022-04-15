import { StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View, Image } from 'react-native'
import React from 'react'
import { Layout, Text, Icon, Card, List, } from '@ui-kitten/components';

import { useNavigation } from '@react-navigation/native'

import ExerResp from '../../components/CardExResp'

const AccEx = 1

const exerciciosRenderContent0 = () => {
  const navigation = useNavigation()

  return (
    <Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }} >
      <Text category='s1' style={{ fontSize: 20, marginTop: 25, marginBottom: 15, marginRight: 10, }}>INFELIZMENTE NÃO CONSEGUIMOS ATRIBUIR NENHUM EXERCICIO!</Text>
      <Text category='p1' style={{ marginLeft: 20, marginRight: 20, fontSize: 15, }}>Para lhe podermos atribuir exercicios tem de adirir ao nosso plano de <Text category='p1' style={{ fontWeight: 'bold', textDecorationLine: 'underline', fontSize: 15, }}>acompanhamento personalizado</Text>!</Text>
      <TouchableOpacity style={{ flexDirection: 'row', marginTop: '50%', marginLeft: '2%', marginRight: '3%' }} onPress={() => {
        navigation.navigate('LandingPage')
      }}>
        <Icon style={styles.icon} fill='#0074cc' name='heart-outline' />
        <Text category='s1' style={{ marginLeft: 15, color: '#0074cc' }}>ADERIR AQUI AO PLANO DE{'\n'}ACOMPANHAMENTO PERSONALIZADO</Text>
      </TouchableOpacity>
    </Layout >
  )
}

const exerciciosRenderContent1 = () => {
  function MenuTypeEx() {
    const [typeExVisible, settypeExVisible] = React.useState(true);
    const [typeEx1, settypeEx1] = React.useState(true);
    const [typeEx2, settypeEx2] = React.useState(false);

    function TextSelecMenu() {
      return (
        <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
          <Text category='s1' style={{ marginBottom: 15, }}>SELECIONE O TIPO DE EXERCICIOS QUE DESEJA.</Text>
        </View>
      )
    }

    if (typeEx1 == true || typeEx2 == false) {
      if (typeExVisible == true) {
        return (
          <>
            <View style={{ justifyContent: 'flex-start', alignItems: 'center', marginBottom: 20, }}>
              <TextSelecMenu />
              <View style={{ flexDirection: 'row', }}>
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={() => {
                    settypeEx1(true)
                    settypeEx2(false)
                    settypeExVisible(false)
                  }}>
                  <Text
                    style={{ textAlign: 'center', fontSize: 18, color: '#0099a7', fontWeight: 'bold', textDecorationLine: 'underline', textDecorationColor: '#0099a7' }}>
                    Fisioterapira{'\n'}Respiratória
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginLeft: 20 }}
                  onPress={() => {
                    settypeEx2(true)
                    settypeEx1(false)
                    settypeExVisible(false)
                  }}>
                  <Text
                    style={{ textAlign: 'center', fontSize: 19, }}>
                    Exercicios{'\n'}Fisicos
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <ExerResp />
          </>
        )
      }
      else {
        return (
          <>
            <View style={{ justifyContent: 'flex-start', alignItems: 'center', marginBottom: '5%' }}>
              <View style={{ flexDirection: 'row', }}>
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={() => {
                    settypeEx2(true)
                    settypeEx1(false)
                    settypeExVisible(false)
                  }}>
                  <Text
                    style={{ textAlign: 'center', fontSize: 18, color: '#0099a7', fontWeight: 'bold', textDecorationLine: 'underline', textDecorationColor: '#0099a7' }}>
                    Fisioterapira{'\n'}Respiratória
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginLeft: 20 }}
                  onPress={() => {
                    settypeEx2(true)
                    settypeEx1(false)
                    settypeExVisible(false)
                  }}>
                  <Text
                    style={{ textAlign: 'center', fontSize: 19, }}>
                    Exercicios{'\n'}Fisicos
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <ExerResp />
          </>
        )
      }
    }
    if (typeEx1 == false || typeEx2 == true) {
      return (
        <>
          <View style={{ justifyContent: 'flex-start', alignItems: 'center', marginBottom: '10%' }}>
            <View style={{ flexDirection: 'row', }}>
              <TouchableOpacity
                style={{ marginRight: 20 }}
                onPress={() => {
                  settypeEx1(true)
                  settypeEx2(false)
                  settypeExVisible(false)
                }}>
                <Text
                  style={{ textAlign: 'center', fontSize: 19, }}>
                  Fisioterapira{'\n'}Respiratória
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginLeft: 20 }}
                onPress={() => {
                  settypeEx1(true)
                  settypeEx2(false)
                  settypeExVisible(false)
                }}>
                <Text
                  style={{ textAlign: 'center', fontSize: 18, color: '#0099a7', fontWeight: 'bold', textDecorationLine: 'underline', textDecorationColor: '#0099a7' }}>
                  Exercicios{'\n'}Fisicos
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <ExerResp /> */}
        </>
      )
    }
  }


  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <MenuTypeEx />
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
  cards: {
    marginLeft: 10,
    marginRight: 15,
    marginBottom: 15,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
})