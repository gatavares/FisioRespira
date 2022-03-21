import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Avatar, Layout, Text, Button } from '@ui-kitten/components';

export default function LandingPage({ navigation }) {
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Avatar source={require('../assets/icon.png')}
                style={styles.logo} />
                
            <Text category='h6' style={styles.bv}>Bem-vindo(a) à FISIO-RESPIRA</Text>
            <Text category='s2' style={styles.warn}>Para aceder à aplicação inicie ou crie uma conta nova.</Text>
            
            <Button style={styles.login} appearance='filled' status='primary'
            onPress={() => navigation.navigate('Login')}>
                Login
            </Button>
            <View style={{justifyContent: 'center', alignItems: 'center', marginStart: '5%', marginEnd: '5%', flexDirection: 'row'}}>
            <View style={styles.hairlineL} /><Text category='h6' style={styles.loginButtonBelowText1}>ou</Text><View style={styles.hairlineR} />
            </View>
            <Button style={styles.regist} appearance='filled' status='primary'
            onPress={() => navigation.navigate('Registar')}>
                Registar
            </Button>
        </Layout>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 230,
        width: 230,
        maxWidth: 250,
        maxWidth: 250,
        minHeight: 50,
        minWidth: 50,
        borderWidth: 2,
        borderColor: '#046f83',
    },

    bv: {
        marginTop: 32,
        marginBottom: 15,
        //fontWeight: 'bold',
    },
    warn: {

    },

    login: {
        backgroundColor: '#283739',
        width: '85%',
        marginTop: 80,
        marginBottom: 25,
        borderRadius: 50,
        borderColor: '#000',
    },
    hairlineL: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: '35%',
        marginRight: '7%',
    },
    hairlineR: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: '35%',
        marginLeft: '7%',
    },
    regist: {
        backgroundColor: '#283739',
        width: '85%',
        marginTop: 25,
        borderRadius: 50,
        borderColor: '#000',
    },
})