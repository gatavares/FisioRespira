import { StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Layout, Text } from '@ui-kitten/components';

export default function LandingPage() {
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginStart: '5%', marginEnd: '5%' }}>
                <Avatar source={require('../assets/icon.png')}
                style={styles.logo} />
            <Text category='h6' style={styles.bv}>Bem-vindo(a) à nome_da_app</Text>
            <Text category='s2' style={styles.warn}>Para aceder à aplicação inicie ou crie uma conta nova.</Text>
        </Layout>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 150,
        width: 150,
        maxWidth: 250,
        maxWidth: 250,
        minHeight: 50,
        minWidth: 50,
    },
    bv: {
        marginTop: 32,
        marginBottom: 15,
        fontWeight: 'bold',
    },
    warn: {

    },
})