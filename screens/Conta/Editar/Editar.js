import { StyleSheet, View, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Layout, Text, Avatar, Icon, Input, Button } from '@ui-kitten/components';
import { doc, updateDoc } from "firebase/firestore";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { db } from '../../../firebase/firebase'

// const Check = (props) => (
//     <Icon name='checkmark-circle-outline'
//         fill="#00e096" />
// );

const Check = (props) => (
    <Icon {...props} name='checkmark-circle-outline' style={[props.style, styles.icon]} />
);

export default function Editar({ navigation, route }) {
    const [valueNome, setValueNome] = useState('');
    const [valuePeso, setValuePeso] = useState('');
    const [valueAltura, setValueAltura] = useState('');
    const [valueDia, setValueDia] = useState('');
    const [valueMes, setValueMes] = useState('');
    const [valueAno, setValueAno] = useState('');

    useEffect(() => {
        navigation.setOptions({
            title: 'Editar Dados',

            headerRight: () => (
                <Button
                    style={{ marginRight: -30, marginTop: -3 }}
                    appearance='ghost'
                    accessoryLeft={Check}
                    status='success'
                    onPress={() => {
                        const userRefUpdate = doc(db, "users", route.params.uid);
                        console.log('Nome: ' + valueNome)
                        console.log('Peso: ' + valuePeso)
                        console.log('Altura: ' + valueAltura)
                        console.log('Ano: ' + valueAno)
                        console.log('Mes: ' + valueMes)
                        console.log('Dia: ' + valueDia)
                        // Set the "capital" field of the city 'DC'
                        // await updateDoc(userRefUpdate, {
                        //     nomeCompleto: valueNome,
                        //     peso: valuePeso,
                        //     altura: valueAltura,
                        //     DataNasc: { Ano: valueAno, Mes: valueMes, Dia: valueDia }
                        // });

                        alert('Dados guardados!')
                    }}
                >
                    Guardar
                </Button>

            ),
        });
        console.log('called')
        setValueAltura(route.params.altura)
    }, []);

    const renderPeso = () => (
        <Text>Kg</Text>
    );
    const renderAlt = () => (
        <Text>M</Text>
    );

    const renderCaption = () => {
        return (
            <View style={styles.captionContainer}>
                <Icon name='alert-circle-outline' style={styles.captionIcon}
                    fill="#8F9BB3" />
                <Text style={styles.captionText}>Se desejar editar, utilize o  .  em vez da  ,{'\n'}entre as casas decimais.</Text>
            </View>
        )
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <Avatar source={{ uri: route.params.img }} style={styles.foto} />
                    <View style={{ marginLeft: '25%', justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Text category='h5' style={{ width: 170, maxWidth: 170 }}>{route.params.nome}</Text>
                    </View>
                </View>
                <View style={styles.hairlineImg} />
                <KeyboardAwareScrollView>
                    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 20 }}>
                        <Text category='h5' style={{ textAlign: 'center', fontWeight: 'bold' }}>Edite aqui as suas {'\n'}Informações Pessoais</Text>
                        <View>
                            <View style={{ flexDirection: 'row', marginTop: 25, }}>
                                <Text category='h6' style={{ marginTop: 10, marginRight: 21 }}>NOME: </Text>
                                <Input
                                    style={{ width: 300, }}
                                    placeholder={route.params.nome}
                                    value={valueNome}
                                    onChangeText={nextValue => setValueNome(nextValue)}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 25, }}>
                                <Text category='h6' style={{ marginTop: 10, marginRight: 27 }}>PESO: </Text>
                                <Input
                                    style={{ width: 300, }}
                                    accessoryRight={renderPeso}
                                    placeholder={route.params.peso}
                                    value={valuePeso}
                                    caption={renderCaption}
                                    onChangeText={nextValue => setValuePeso(nextValue)}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 25, }}>
                                <Text category='h6' style={{ marginTop: 10, marginRight: 3 }}>ALTURA: </Text>
                                <Input
                                    style={{ width: 300, }}
                                    accessoryRight={renderAlt}
                                    placeholder={route.params.altura}
                                    value={valueAltura}
                                    caption={renderCaption}
                                    onChangeText={nextValue => setValueAltura(nextValue)}
                                />
                            </View>

                            <View style={{ marginTop: 25, marginBottom: 20 }}>
                                <Text category='h6' style={{ marginTop: 10, marginRight: 21 }}>DATA DE NASCIMENTO: </Text>
                                <View style={{ flexDirection: 'row', marginTop: 10, }}>
                                    <Input
                                        style={{ width: 100, marginRight: 15 }}
                                        placeholder={route.params.diaNasc}
                                        textAlign='center'
                                        value={valueDia}
                                        maxLength={2}
                                        onChangeText={nextValue => setValueDia(nextValue)}
                                    />
                                    <Input
                                        style={{ width: 100, marginRight: 15 }}
                                        placeholder={route.params.mesNasc}
                                        textAlign='center'
                                        value={valueMes}
                                        maxLength={2}
                                        onChangeText={nextValue => setValueMes(nextValue)}
                                    />
                                    <Input
                                        style={{ width: 160 }}
                                        placeholder={route.params.anoNasc}
                                        value={valueAno}
                                        textAlign='center'
                                        maxLength={4}
                                        onChangeText={nextValue => setValueAno(nextValue)}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </Layout>
        </TouchableWithoutFeedback>
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
    captionContainer: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    captionIcon: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
    captionText: {
        fontSize: 12,
        fontWeight: "400",
        color: "#8F9BB3",
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: -5,
    },
})