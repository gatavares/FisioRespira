import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import { Layout, Text, Card, Avatar } from '@ui-kitten/components';


const HeaderGui = (props) => (
  <View {...props} style={{alignItems: 'center', marginTop: 15,}}>
    <Text category='h6'>Guilherme</Text>
    <Text category='s1'>Andrade Tavares</Text>
  </View>
);
const HeaderMari = (props) => (
  <View {...props} style={{alignItems: 'center', marginTop: 15,}}>
    <Text category='h6'>Mariana</Text>
    <Text category='s1'>Ramalhão Gabriel</Text>
  </View>
);
const HeaderJoao = (props) => (
  <View {...props} style={{alignItems: 'center', marginTop: 15,}}>
    <Text category='h6'>João</Text>
    <Text category='s1'>Pedro Cardoso Fernades</Text>
  </View>
);
const HeaderMarce = (props) => (
  <View {...props} style={{alignItems: 'center', marginTop: 15,}}>
    <Text category='h6'>Marcelo</Text>
    <Text category='s1'>Santos Oliveira</Text>
  </View>
);

const AboutUsPageRender = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView style={styles.scrollView}>
        <Text category='s1' style={{ fontSize: 22, }}>O QUE NÓS SOMOS?</Text>
        <Text category='p2' style={styles.text}>
          {'\n'}Nós somos um conjunto de quatro jovens programadores do curso <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>Técnico de Gestão e Programação de Sistemas Informáticos</Text> da
          <Text style={{ fontWeight: 'bold' }}> Escola Profissional Ruiz Costa</Text>.{'\n'}Nós adoramos desafios, então aceitamos de bom agrado este desafio proposto pelos nossos professores de Fisico-Quimica, Português e Programação. 
          Fez-nos trabalhar, investigar e dedicar muito tempo, pois era uma nova linguagem, um projeto inovador e também para ajudar todos os que sofrem de doenças que necessitam de ser 
          tratadas através de fisioterapia respiratória.
        </Text>
        <Text category='s1' style={styles.title}>EQUIPA</Text>
        <Card style={styles.card} header={HeaderGui}>
          <Avatar source={require('../../assets/icon.png')}
            shape='square'
            style={styles.fotos} />
        </Card>

        <Card style={styles.card} header={HeaderMari}>
          <Avatar source={require('../../assets/icon.png')}
            shape='square'
            style={styles.fotos} />
        </Card>
        <Card style={styles.card} header={HeaderJoao}>
          <Avatar source={require('../../assets/icon.png')}
            shape='square'
            style={styles.fotos} />
        </Card>

        <Card style={styles.card} header={HeaderMarce}>
          <Avatar source={require('../../assets/icon.png')}
            shape='square'
            style={styles.fotos} />
        </Card>
      </ScrollView>
    </Layout>
  )
}

export default AboutUsPageRender

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
  topContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    alignItems: 'center',
    marginTop: 20,
    flex: 1,
  },
  fotos: {
    width: 200,
    height: 200,
  },
})