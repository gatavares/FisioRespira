import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import { Layout, Text } from '@ui-kitten/components';


const FisioPageRender = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView>
        <View style={{ margin: '7%', }}>
          <Text category='s1' style={{ fontSize: 22, }}>EXERCICIOS RESPIRATÓRIOS</Text>
          <Text category='s1' style={{ fontSize: 18, marginTop: 8 }}>EXPANSÃO TÓRACICA</Text>
          <Text category='p2' style={styles.text}>
            {'\n'}{'\t'}Normalmente, a expansibilidade é simétrica e igual nos dois hemitórax. Qualquer doença que afete a caixa torácica,
            sua musculatura, o diafragma, a pleura ou o pulmão de um lado, pode ser precocemente percebido pela assimetria dos movimentos ventilátorios,
            ao se compararem ambos os hemitórax. {'\n'}{'\n'}{'\t'}
            A assimetria é mais facilmente reconhecida quando o paciente realiza inspiração profunda. Seja qual for à estrutura doente, o hemitórax
            comprometido move-se menos.
          </Text>
          <Text category='s1' style={styles.title}>CONTROLO RESPIRATÓRIO</Text>
          <Text category='p2' style={styles.text}>
            {'\n'}{'\t'}A respiração é normalmente automática, controlada inconscientemente pelo centro respiratório localizado na base do cérebro.{'\n'}{'\n'}{'\t'}
            A respiração continua durante o sono e, normalmente, mesmo quando a pessoa está inconsciente. As pessoas também conseguem controlar a
            respiração quando querem, por exemplo, durante a fala, ao cantar ou simplesmente prendendo voluntariamente a respiração.{'\n'}{'\n'}{'\t'}
            Órgãos sensoriais localizados no cérebro, na aorta e nas artérias carótidas monitoram o sangue e verificam os níveis de oxigênio e
            dióxido de carbono. Normalmente, uma elevada concentração de dióxido de carbono é o estímulo mais forte para se respirar mais profundamente e
            com maior frequência.{'\n'}{'\n'}{'\t'}Por outro lado, quando a concentração de dióxido de carbono no sangue é baixa, o cérebro diminui a frequência
            e a profundidade das respirações. Durante a respiração em repouso, um adulto normal inspira e expira cerca de 15 vezes por minuto.
          </Text>
          <Text category='s1' style={styles.title}>REMOÇÃO DE SECREÇÕES</Text>
          <Text category='p2' style={styles.text}>
            {'\n'}{'\t'}A fisioterapia respiratória realizada em domicílio é indicada para pessoas que tiveram alta hospitalar, mas que ainda encontram-se em
            fase de recuperação de transtornos respiratórios ou de eventos cardíacos, como um infarto. Esta pode ser realizada 1 ou 2 vezes por semana,
            sob a orientação do fisioterapeuta que trabalha com home care, mas o indivíduo deve ser estimulado a praticar os exercícios de cinesioterapia
            respiratória diariamente.
            {'\n'}{'\n'}{'\t'}Para tal, o fisioterapeuta pode recorrer a aparelhos que mobilizam a secreção, fluidificam e facilitam a sua retirada, como o flutter e o
            nebulizador, e indicar a realização de exercícios que estimulam a respiração forçada.
          </Text>
        </View>
      </ScrollView>
    </Layout>
  )
}

export default FisioPageRender

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    fontSize: 18,
  },
  text: {
    fontSize: 17,
  },
})