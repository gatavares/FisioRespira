import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Layout, Text, Avatar, Icon, Input, Button } from '@ui-kitten/components';
import { doc, getDoc } from "firebase/firestore";


const Edit = (props) => (
    <Icon {...props} name='edit-2-outline' style={[props.style, styles.icon]} />
);


export default function InfoPessoal({ navigation, route }) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Informações de ' + route.params.user,

            headerRight: () => (
                <Button
                    style={{ marginRight: -30, marginTop: -3}}
                    appearance='ghost'
                    accessoryLeft={Edit}
                    status='primary'
                    onPress={() =>
                        navigation.navigate('EditAcc', {
                            uid: route.params.uid,
                            user: route.params.user,
                            nome: route.params.nome,
                            img: route.params.img,
                            peso: route.params.peso,
                            idade: route.params.idade,
                            altura: route.params.altura,
                            tipoAcc: route.params.tipoAcc,
                        })
                    }
                >
                    Editar
                </Button>
            ),
        });
    }, [navigation]);

    const renderPeso = () => (
        <Text>Kg</Text>
    );
    const renderAlt = () => (
        <Text>M</Text>
    );
    const renderYear = () => (
        <Text>ANOS</Text>
    );

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', marginTop: 30, }}>
                <Avatar source={{ uri: route.params.img }} style={styles.foto} />
                <View style={{ marginLeft: '25%', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Text category='h5' style={{ width: 170, maxWidth: 170 }}>{route.params.nome}</Text>
                </View>
            </View>
            <View style={styles.hairlineImg} />

            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 20 }}>
                <Text category='h5'>Informações Pessoais</Text>
                <View style={{}}>
                    <View style={{ flexDirection: 'row', marginTop: 25, }}>
                        <Text category='h6' style={{ marginTop: 10, marginRight: 5 }}>NOME: </Text>
                        <Input
                            style={{ width: 305, }}
                            disabled={true}
                            placeholder={route.params.nome}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 25, }}>
                        <Text category='h6' style={{ marginTop: 10, marginRight: 11 }}>PESO: </Text>
                        <Input
                            style={{ width: 100, }}
                            disabled={true}
                            accessoryRight={renderPeso}
                            placeholder={route.params.peso}
                        />
                        <Text category='h6' style={{ marginTop: 10, marginRight: 5, marginLeft: 15 }}>ALTURA: </Text>
                        <Input
                            style={{ width: 100, }}
                            disabled={true}
                            accessoryRight={renderAlt}
                            placeholder={route.params.altura}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 25, }}>
                        <Text category='h6' style={{ marginTop: 10, marginRight: 5 }}>IDADE: </Text>
                        <Input
                            style={{ width: 100, }}
                            disabled={true}
                            placeholder={route.params.idade}
                        />
                    </View>
                </View>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    foto: {
        width: 100,
        height: 100,
        borderColor: '#2e2e2e',
        borderWidth: 1,
    },
    hairlineImg: {
        backgroundColor: '#BBBBBB',
        height: 1,
        width: '100%',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: -5,
    },
})