import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Layout, Text, Avatar, Icon } from '@ui-kitten/components';

const AccPageRender = () => {
  return (
    <>

      <Layout style={{ flex: 1, }}>
        <View style={{ marginLeft: '7%' }}>
          <View style={{ flexDirection: 'row', marginTop: 40 }}>
            <Avatar source={require('../../assets/Foto-Bruno.png')} style={styles.foto} />
            <Text style={{ marginTop: 7, marginLeft: 15, }}>Olá{'\n'}<Text category='s1'>Bruno Santos</Text></Text>
          </View>
        </View>

        <View style={styles.hairline} />

        <View style={{ marginLeft: '7%' }}>
          <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
            <Icon style={styles.icon} fill='#000' name='settings-2-outline' />
            <Text category='s1' style={{ marginTop: 7, marginLeft: 15, marginRight: '25%', marginBottom: 10, }}>INFORMAÇÕES PESSOAIS</Text>
              <Icon
                style={styles.iconSeta}
                fill='#000'
                name='arrow-ios-forward-outline'
              />
          </TouchableOpacity>
        </View>

        <View style={styles.hairline} />

        <View style={{ marginLeft: '7%' }}>
          <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
            <Icon style={styles.icon} fill='#000' name='edit-2-outline' />
            <Text category='s1' style={{ marginTop: 7, marginLeft: 15, marginRight: '46%', marginBottom: 10, }}>EDITAR DADOS</Text>
              <Icon
                style={styles.iconSeta}
                fill='#000'
                name='arrow-ios-forward-outline'
              />
          </TouchableOpacity>
        </View>

        <View style={styles.hairline} />

        <View style={{ marginLeft: '7%' }}>
          <TouchableOpacity style={{ flexDirection: 'row', marginTop: 30 }}>
            <Icon style={styles.icon} fill='#000' name='heart-outline' />
            <Text category='s1' style={{ marginTop: -3, marginLeft: 15, marginRight: '32%', marginBottom: 6, }}>ADERIR AO PLANO DE ACOMPANHAMENTO</Text>
            <Icon
              style={styles.iconSeta}
              fill='#000'
              name='arrow-ios-forward-outline'
            />
          </TouchableOpacity>
        </View>

        <View style={styles.hairline} />

        <View style={{ marginLeft: '7%' }}>
          <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
            <Icon style={styles.icon} fill='#000' name='question-mark-outline' />
            <Text category='s1' style={{ marginTop: 7, marginLeft: 15, marginRight: '24%', marginBottom: 10, }}>PERGUNTAS FREQUENTES</Text>
              <Icon
                style={styles.iconSeta}
                fill='#000'
                name='arrow-ios-forward-outline'
              />
          </TouchableOpacity>
        </View>
        <View style={styles.hairline} />

      </Layout>

      <Layout style={{ justifyContent: 'flex-end', alignItems: 'center', }}>
        <TouchableOpacity
          style={styles.btnLogout}>
          <Icon
            style={styles.iconLogout}
            fill='#ff3d71'
            name='log-out-outline'
          />
          <Text category='h6' status='danger' style={{ marginLeft: 10, }}>TERMINAR SESSÃO</Text>
        </TouchableOpacity>
      </Layout>
    </>
  )
}

export default AccPageRender

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
  foto: {
    width: 50,
    height: 50,
    borderColor: '#2e2e2e',
    borderWidth: 2,
  },
  hairline: {
    backgroundColor: '#BBBBBB',
    height: 1,
    width: '100%',
    marginTop: 20,
    marginRight: '7%'
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconSeta: {
    marginTop: 5,
    width: 22,
    height: 22,
  },
  btnLogout: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  iconLogout: {
    width: 30,
    height: 30,
  },
})