import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { Layout, Text, Avatar, Icon } from '@ui-kitten/components';

import { getAuth, signOut } from "firebase/auth";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/firebase'
import { async } from '@firebase/util';

const AccPageRender = ({ navigation, route }) => {
  const params = route.params

  const [userDados, setUserDados] = useState({})

  async function getUserDados() {
    const userDocRef = doc(db, "users", route.params.UID);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      //console.log("Document data:", userDocSnap.data());
      setUserDados({
        uid: userDocSnap.id,
        user: userDocSnap.data().nome,
        nome: userDocSnap.data().nomeCompleto,
        img: `https://avatars.dicebear.com/api/initials/${userDocSnap.data().nomeCompleto}.png`,
        peso: userDocSnap.data().peso,
        idade: userDocSnap.data().idade,
        dataNasc: userDocSnap.data().DataNasc,
        altura: userDocSnap.data().altura,
        tipoAcc: userDocSnap.data().tipoAcc,
        exResp: userDocSnap.data().exResp,
        exFisic: userDocSnap.data().exFisic,
      })
    }
    else {
      console.log("Nenhum documento com o UID: " + route.params.UID + " foi encontrado!");
    }
  }

  function editarOnNavigate() {
    if (route.params.edit === 1) {
      navigation.navigate('EditAcc', {
        uid: userDados.uid,
        user: userDados.user,
        nome: userDados.nome,
        img: userDados.img,
        peso: userDados.peso.toString(),
        idade: userDados.idade.toString(),
        diaNasc: userDados.dataNasc.Dia.toString(),
        mesNasc: userDados.dataNasc.Mes.toString(),
        anoNasc: userDados.dataNasc.Ano.toString(),
        altura: userDados.altura.toString(),
        tipoAcc: userDados.tipoAcc.toString(),
      })
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      console.log(route.params.edit)
      getUserDados();
      editarOnNavigate();
    }, [])
  );


  return (
    <>
      <Layout style={{ flex: 1, }}>
        <View style={{ marginLeft: '7%' }}>
          <View style={{ flexDirection: 'row', marginTop: 40 }}>
            <Avatar source={{ uri: userDados.img }} style={styles.foto} />
            <Text style={{ marginTop: 7, marginLeft: 15, }}>Olá{'\n'}<Text category='s1'>{userDados.nome}</Text></Text>
          </View>
        </View>

        <View style={styles.hairline} />

        <View style={{ marginLeft: '7%' }}>
          <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}
            onPress={() => {

              navigation.navigate('Infos', {
                uid: userDados.uid,
                user: userDados.user,
                nome: userDados.nome,
                img: userDados.img,
                peso: userDados.peso.toString(),
                idade: userDados.idade.toString(),
                diaNasc: userDados.dataNasc.Dia.toString(),
                mesNasc: userDados.dataNasc.Mes.toString(),
                anoNasc: userDados.dataNasc.Ano.toString(),
                altura: userDados.altura.toString(),
                tipoAcc: userDados.tipoAcc.toString(),
              })
            }}>
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
          <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}
            onPress={() => {
              navigation.navigate('EditAcc', {
                uid: userDados.uid,
                user: userDados.user,
                nome: userDados.nome,
                img: userDados.img,
                peso: userDados.peso.toString(),
                idade: userDados.idade.toString(),
                diaNasc: userDados.dataNasc.Dia.toString(),
                mesNasc: userDados.dataNasc.Mes.toString(),
                anoNasc: userDados.dataNasc.Ano.toString(),
                altura: userDados.altura.toString(),
                tipoAcc: userDados.tipoAcc.toString(),
              })
            }}>
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
          style={styles.btnLogout}
          onPress={() => {
            const auth = getAuth();
            signOut(auth).then(() => {
              navigation.navigate('LandingPage')
            }).catch((error) => {
              console.log(error)
            });
          }}>
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