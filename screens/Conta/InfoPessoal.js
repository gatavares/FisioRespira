import { StyleSheet, View, Button } from 'react-native'
import React from 'react'
import { Layout, Text, Avatar, Icon } from '@ui-kitten/components';
import { doc, getDoc } from "firebase/firestore";

export default function InfoPessoal({ navigation, route }) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Informações de ' + route.params.user,

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
            <Text>Informações Pessoais de {route.params.nome}</Text>
        </Layout>
    )
}

const styles = StyleSheet.create({

})