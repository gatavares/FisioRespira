import { TouchableWithoutFeedback, StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Avatar, Layout, Text, Button, Input, CheckBox, Icon, TopNavigationAction, Card, Modal, } from '@ui-kitten/components';

import '../firebase/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const RegistoPage = ({ navigation }) => {
    //inputs variables 
    //valor que esta a ser escrito e sendo atualizado a cada modificacao
    const [valueEmail, setValueEmail] = React.useState('');
    //password
    const [valuePass, setValuePass] = React.useState('');
    const [valuePassConfirm, setValuePassConfirm] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    //visibilidade modal
    const [visibleTermos, setVisibleTermos] = React.useState(false);
    const [visiblePassDif, setVisiblePassDif] = React.useState(false);
    const [visibleNull, setVisibleNull] = React.useState(false);
    const [visibleEmail, setVisibleEmail] = React.useState(false);
    const [visibleEmailUsed, setVisibleEmailUsed] = React.useState(false);
    const [visibleRegistSuss, setVisibleRegistSuss] = React.useState(false);



    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} fill='#000000' name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    const useCheckboxState = (initialCheck = false) => {
        const [checked, setChecked] = React.useState(initialCheck);
        return { checked, onChange: setChecked };
    };

    const successCheckboxState = useCheckboxState();

    const auth = getAuth();

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Avatar source={require('../assets/icon.png')}
                style={styles.logo} />

            <Input
                placeholder='Endereço de Email'
                status='basic'
                style={styles.imputEmail}
                keyboardType="email-address"
                value={valueEmail}
                onChangeText={nextValue => setValueEmail(nextValue)}
            />
            <Input
                value={valuePass}
                placeholder='Palavra-Passe'
                status='basic'
                style={styles.imputPass}
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={nextValue => setValuePass(nextValue)}
            />
            <Input
                value={valuePassConfirm}
                placeholder='Confirmar Palavra-Passe'
                status='basic'
                style={styles.imputPass}
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                onChangeText={nextValue => setValuePassConfirm(nextValue)}
            />
            <CheckBox
                style={styles.checkbox}
                status='basic'
                {...successCheckboxState}>
                Aceito os termos e condições.
            </CheckBox>

            <Button style={styles.regist} appearance='filled' status='primary' onPress={() => {
                if (successCheckboxState.checked == true) {
                    if (valuePass != '' || valuePassConfirm != '') {
                        createUserWithEmailAndPassword(auth, valueEmail, valuePass)
                            .then((userCredential) => {
                                // Signed in
                                const user = userCredential.user;
                                setVisibleRegistSuss(true)
                            })
                            .catch((error) => {
                                const errorCode = error.code;

                                console.log(errorCode)
                                if (errorCode == 'auth/invalid-email' || errorCode == 'auth/missing-email') {
                                    setVisibleEmail(true)
                                }
                                if (errorCode == 'auth/weak-password') {
                                    setVisiblePassDif(true)
                                }
                                if (errorCode == 'auth/email-already-in-use') {
                                    setVisibleEmailUsed(true)
                                }
                            });
                    }
                    else {
                        //modal erro de pass nulas
                        setVisibleNull(true)
                    }
                }
                else {
                    //termos e condicos (checked == false)
                    setVisibleTermos(true)
                }
            }}>
                Registar
            </Button>

            <Modal
                visible={visibleEmailUsed}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisibleEmailUsed(false)}>
                <Card disabled={true} style={{ borderRadius: 15, }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Icon
                            style={styles.warnicon}
                            fill='#ff8800'
                            name='alert-triangle-outline'
                        />
                        <Text style={{ marginBottom: 20, fontWeight: 'bold', }}>Erro!</Text>
                    </View>
                    <Text >Este endereço de email já foi utilizado, tente recuperar a palavra-passe</Text>
                    <Button style={styles.btnok} onPress={() => setVisibleEmailUsed(false)} >
                        TENTAR NOVAMENTE
                    </Button>
                </Card>
            </Modal>
            <Modal
                visible={visibleRegistSuss}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisibleRegistSuss(false)}>
                <Card disabled={true} style={{ borderRadius: 15, }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Icon
                            style={styles.warnicon}
                            fill='#ff8800'
                            name='alert-triangle-outline'
                        />
                        <Text style={{ marginBottom: 20, fontWeight: 'bold', }}>Erro!</Text>
                    </View>
                    <Text >Foi registado com susseço! 🥳Bem-vindo à nossa aplicação de fisioterapia respiratória. {'\n'}A redirecionar para dentro da aplicação.🤗</Text>
                    <Button style={styles.btnok} onPress={() => setVisibleRegistSuss(false)} >
                        TENTAR NOVAMENTE
                    </Button>
                </Card>
            </Modal>
            <Modal
                visible={visibleEmail}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisibleEmail(false)}>
                <Card disabled={true} style={{ borderRadius: 15, }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Icon
                            style={styles.warnicon}
                            fill='#ff8800'
                            name='alert-triangle-outline'
                        />
                        <Text style={{ marginBottom: 20, fontWeight: 'bold', }}>Erro!</Text>
                    </View>
                    <Text >Insira um endereço de email válido.</Text>
                    <Button style={styles.btnok} onPress={() => setVisibleEmail(false)} >
                        TENTAR NOVAMENTE
                    </Button>
                </Card>
            </Modal>
            <Modal
                visible={visibleNull}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisibleNull(false)}>
                <Card disabled={true} style={{ borderRadius: 15, }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Icon
                            style={styles.warnicon}
                            fill='#ff8800'
                            name='alert-triangle-outline'
                        />
                        <Text style={{ marginBottom: 20, fontWeight: 'bold', }}>Erro!</Text>
                    </View>
                    <Text >Insira uma palavra-passe e confirme-a.</Text>
                    <Button style={styles.btnok} onPress={() => setVisibleNull(false)} >
                        TENTAR NOVAMENTE
                    </Button>
                </Card>
            </Modal>
            <Modal
                visible={visiblePassDif}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisiblePassDif(false)}>
                <Card disabled={true} style={{ borderRadius: 15, }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Icon
                            style={styles.warnicon}
                            fill='#ff8800'
                            name='alert-triangle-outline'
                        />
                        <Text style={{ marginBottom: 20, fontWeight: 'bold', }}>Erro!</Text>
                    </View>
                    <Text >As palavra-passe que inseriu não correspondem.</Text>
                    <Button style={styles.btnok} onPress={() => setVisiblePassDif(false)} >
                        TENTAR NOVAMENTE
                    </Button>
                </Card>
            </Modal>
            <Modal
                visible={visibleTermos}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisibleTermos(false)}>
                <Card disabled={true} style={{ borderRadius: 15, }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Icon
                            style={styles.warnicon}
                            fill='#ff8800'
                            name='alert-triangle-outline'
                        />
                        <Text style={{ marginBottom: 20, fontWeight: 'bold', }}>Erro!</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text >Para continuar tem de aceitar os termos. Se tiver alguma duvida clique no link em baixo!</Text><Text style={{ textDecorationLine: 'underline', fontStyle: 'italic', color: '#0074cc' }}
                            onPress={() => {
                                setVisibleTermos(false)
                                navigation.navigate('Termos')
                            }}>
                            {'\n'}Termos e Condições
                        </Text>
                    </View>
                    <Button style={styles.btnok} onPress={() => setVisibleTermos(false)} >
                        TENTAR NOVAMENTE
                    </Button>
                </Card>
            </Modal>
        </Layout >
    )
}

export default RegistoPage

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
    imputEmail: {
        marginTop: 80,
        width: '85%',
        borderColor: '#E4E9F2',
    },
    imputPass: {
        marginTop: 20,
        width: '85%',
        borderColor: '#E4E9F2',
    },
    checkbox: {
        marginTop: 25,
        marginRight: '25%',
    },
    regist: {
        backgroundColor: '#283739',
        width: '85%',
        marginTop: 50,
        borderRadius: 50,
        borderColor: '#000',
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    warnicon: {
        height: 35,
        width: 35,
        marginRight: 10,
        marginBottom: 20,
    },
    btnok: {
        marginTop: 20,
        backgroundColor: '#283739',
        borderRadius: 50,
        borderColor: '#000',
    },
})