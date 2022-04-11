import { StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Layout, Text, Icon } from '@ui-kitten/components';


import { useNavigation } from '@react-navigation/native'

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
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text category='s1' style={{ marginBottom: 15, marginTop: 15, }}>SELECIONE O TIPO DE EXERCICIOS QUE DESEJA.</Text>
        </View>
      )
    }

    if (typeEx1 == true || typeEx2 == false) {
      if (typeExVisible == true) {
        return (
          <>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10, }}>
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
            <ScrollView>
              <View style={{ margin: '7%', }}>
                <Text category='s1' style={{ fontSize: 22, }}>EXERCICIOS 1</Text>
                <Text category='p2' style={styles.text}>
                  {'\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </View>
            </ScrollView>
          </>
        )
      }
      else {
        return (
          <>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 20, }}>
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
            <ScrollView>
              <View style={{ margin: '7%', }}>
                <Text category='s1' style={{ fontSize: 22, }}>EXERCICIOS 2</Text>
                <Text category='p2' style={styles.text}>
                  {'\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </View>
            </ScrollView>
          </>
        )
      }
    }
    if (typeEx1 == false || typeEx2 == true) {
      return (
        <>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 20, }}>
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
          <ScrollView>
            <View style={{ margin: '7%', }}>
              <Text category='s1' style={{ fontSize: 22, }}>EXERCICIOS 3</Text>
              <Text category='p2' style={styles.text}>
                {'\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>
          </ScrollView>
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
})