import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native'
import React from 'react'
import { Avatar, Layout, Text, Button, Input, Icon, TopNavigationAction } from '@ui-kitten/components';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const LoginPage = ({ navigation }) => {
    //inputs variables 
    //valor que esta a ser escrito e sendo atualizado a cada modificacao
    const [valueEmail, setValueEmail] = React.useState('');
    //password
    const [valuePass, setValuePass] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} fill='#000000' name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

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


            <Button style={styles.login} appearance='filled' status='primary'
                onPress={() => {
                    //login firebase
                    const auth = getAuth();
                    signInWithEmailAndPassword(auth, valueEmail, valuePass)
                        .then((userCredential) => {
                            // Signed in
                            console.log(userCredential)
                            navigation.navigate('Home')
                            // ...
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                        });
                }}>
                Login
            </Button>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginStart: '5%', marginEnd: '5%', flexDirection: 'row' }}>
                <View style={styles.hairlineL} /><Text category='h6' style={styles.loginButtonBelowText1}>ou</Text><View style={styles.hairlineR} />
            </View>
            <Button style={styles.regist} appearance='filled' status='primary'
                onPress={() => {
                    setValueEmail('')
                    setValuePass('')
                    navigation.navigate('Registar')
                }
                }>
                Registar
            </Button>
        </Layout>
    )
}

export default LoginPage

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
    login: {
        backgroundColor: '#283739',
        width: '85%',
        marginTop: 50,
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