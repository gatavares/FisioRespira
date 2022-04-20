import { StyleSheet, View, Button } from 'react-native'
import React from 'react'
import { Layout, Text, Avatar, Icon } from '@ui-kitten/components';

export default function InfoPessoal({ navigation, route }) {
    //let nome = 'Bruno'
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Informaçoes de ' + route.params.nome,

            headerRight: () => (
                <Button
                    onPress={() => alert('This is a button!')}
                    title="Editar"
                    color="#006eff"
                />
            ),
        });
    }, [navigation]);
    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Informações Pessoais</Text>
        </Layout>
    )
}

const styles = StyleSheet.create({

})