import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Layout, Text, Avatar, Icon, Input, Button } from '@ui-kitten/components';
import { doc, getDoc } from "firebase/firestore";

// const Check = (props) => (
//     <Icon name='checkmark-circle-outline'
//         fill="#00e096" />
// );

const Check = (props) => (
    <Icon {...props} name='checkmark-circle-outline' style={[props.style, styles.icon]} />
);

export default function Editar({ navigation, route }) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Editar Dados',

            headerRight: () => (
                <Button
                    style={{ marginRight: -30, marginTop: -3 }}
                    appearance='ghost'
                    accessoryLeft={Check}
                    status='success'
                    onPress={() => {
                        alert('Dados guardados! \n*ex*')
                    }}
                >
                    Guardar
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
    const text = () => (
        <Text>Ola</Text>
    );

    const [valueNome, setValueNome] = React.useState('');
    const [valuePeso, setValuePeso] = React.useState('');
    const [valueAltura, setValueAltura] = React.useState('');
    const [valueIdade, setValueIdade] = React.useState('');


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
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', marginTop: 30, }}>
                <Avatar source={{ uri: route.params.img }} style={styles.foto} />
                <View style={{ marginLeft: '25%', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Text category='h5' style={{ width: 170, maxWidth: 170 }}>{route.params.nome}</Text>
                </View>
            </View>
            <View style={styles.hairlineImg} />

            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 20 }}>
                <Text category='h5' style={{ textAlign: 'center', fontWeight: 'bold' }}>Edite aqui as suas {'\n'}Informações Pessoais</Text>
                <View style={{}}>
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
                    <View style={{ flexDirection: 'row', marginTop: 25, }}>
                        <Text category='h6' style={{ marginTop: 10, marginRight: 21 }}>IDADE: </Text>
                        <Input
                            style={{ width: 300, }}
                            placeholder={route.params.idade}
                            value={valueIdade}
                            onChangeText={nextValue => setValueIdade(nextValue)}
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